import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ButtonComponent } from '../../components/shared/button/button.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  @Input() embedded = false;

  pricingTiers: any[] = [];
  comparisonRows: any[] = [];
  billingCycle: 'monthly' | 'yearly' = 'monthly';
  monthlyPrices: number[] = [];
  yearlyPrices: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/pricing-tiers.json').subscribe({
      next: (data) => {
        this.monthlyPrices = data.pricing.monthly;
        this.yearlyPrices = data.pricing.yearly;
        this.pricingTiers = data.tiers;
        this.comparisonRows = data.comparison ?? [];
      },
      error: (error) => {
        console.error('Error loading pricing tiers:', error);
      }
    });
  }

  faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the start of your next billing cycle.',
      open: false
    },
    {
      question: 'What happens if I exceed my request limit?',
      answer: 'If you exceed your monthly limit, API requests will return a 429 (Too Many Requests) error. You can upgrade your plan or wait until the next billing cycle. We\'ll send you email notifications before you reach your limit.',
      open: false
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes, all paid plans come with a 14-day free trial. No credit card required to start your trial.',
      open: false
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), as well as PayPal for monthly subscriptions. Annual plans can also be paid via bank transfer.',
      open: false
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for annual plans. Monthly subscriptions can be cancelled at any time with no refunds for the current month.',
      open: false
    },
    {
      question: 'Can I get a discount for annual billing?',
      answer: 'Yes! Save 20% by switching to annual billing. Contact our sales team for enterprise volume discounts.',
      open: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
  toggleBillingCycle(cycle: 'monthly' | 'yearly'): void {
    this.billingCycle = cycle;
  }

  getPrice(index: number): number {
    return this.billingCycle === 'monthly' 
      ? this.monthlyPrices[index] 
      : this.yearlyPrices[index];
  }

  selectPlan(tier: any): void {
    if (typeof window !== 'undefined') {
      window.location.href = `https://localhost:4200/signup/${tier.id}`;
    }
  }

  getSavingsPercent(): number {
    const monthlyTotal = this.monthlyPrices[1] * 12;
    const yearlyTotal = this.yearlyPrices[1];
    return Math.round(((monthlyTotal - yearlyTotal) / monthlyTotal) * 100);
  }
}
