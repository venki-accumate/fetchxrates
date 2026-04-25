import {
  Component, signal, OnInit, OnDestroy, ViewChild, ElementRef,
  AfterViewInit, NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { environment } from '../../../environments/environment';

declare const turnstile: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('turnstileContainer') turnstileContainer!: ElementRef<HTMLDivElement>;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = signal(false);
  submitting = signal(false);
  errorMessage = signal('');
  turnstileToken = signal('');

  private turnstileWidgetId: string | null = null;
  private pollInterval: ReturnType<typeof setInterval> | null = null;

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.waitForTurnstile();
  }

  ngOnDestroy(): void {
    if (this.pollInterval) clearInterval(this.pollInterval);
    if (this.turnstileWidgetId !== null && typeof turnstile !== 'undefined') {
      turnstile.remove(this.turnstileWidgetId);
    }
  }

  private waitForTurnstile(): void {
    this.pollInterval = setInterval(() => {
      if (typeof turnstile !== 'undefined' && this.turnstileContainer?.nativeElement) {
        clearInterval(this.pollInterval!);
        this.pollInterval = null;
        this.renderTurnstile();
      }
    }, 300);
  }

  private renderTurnstile(): void {
    this.turnstileWidgetId = turnstile.render(this.turnstileContainer.nativeElement, {
      sitekey: environment.cloudflareId,
      theme: 'dark',
      callback: (token: string) => {
        this.ngZone.run(() => this.turnstileToken.set(token));
      },
      'expired-callback': () => {
        this.ngZone.run(() => this.turnstileToken.set(''));
      },
      'error-callback': () => {
        this.ngZone.run(() => this.turnstileToken.set(''));
      }
    });
  }

  get canSubmit(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.subject.trim() &&
      this.formData.message.trim() &&
      this.turnstileToken() &&
      !this.submitting()
    );
  }

  onSubmit(): void {
    if (!this.canSubmit) return;

    this.submitting.set(true);
    this.errorMessage.set('');

    const payload = {
      name: this.formData.name.trim(),
      email: this.formData.email.trim(),
      subject: this.formData.subject.trim(),
      message: this.formData.message.trim(),
      turnstileToken: this.turnstileToken()
    };

    this.http.post<{ success: boolean }>(
      'https://api.fetchxrates.com/support/contact',
      payload
    ).subscribe({
      next: () => {
        this.submitted.set(true);
        this.submitting.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to send message. Please try again or email us directly.');
        this.submitting.set(false);
        if (this.turnstileWidgetId !== null && typeof turnstile !== 'undefined') {
          turnstile.reset(this.turnstileWidgetId);
        }
      }
    });
  }

  resetForm(): void {
    this.formData = { name: '', email: '', subject: '', message: '' };
    this.submitted.set(false);
    this.errorMessage.set('');
    this.turnstileToken.set('');
    if (this.turnstileWidgetId !== null && typeof turnstile !== 'undefined') {
      turnstile.reset(this.turnstileWidgetId);
    }
  }
}
