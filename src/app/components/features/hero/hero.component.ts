import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private router: Router) {}

  navigateToSignup(): void {
    window.location.href = `${environment.appUrl}/signup`;
  }

  navigateToFeatures(): void {
    this.router.navigate(['/features']);
  }
}
