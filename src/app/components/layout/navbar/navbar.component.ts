import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  mobileMenuOpen = signal(false);
  isDarkTheme = signal(true);

  constructor() {
    // Load theme preference from localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkTheme.set(savedTheme !== 'light');
      this.applyTheme();
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.isDarkTheme.set(!this.isDarkTheme());
    this.applyTheme();
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
    }
  }

  private applyTheme(): void {
    if (typeof document !== 'undefined') {
      if (this.isDarkTheme()) {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  }

  navigateToLogin(): void {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://localhost:4200/login';
    }
  }
}
