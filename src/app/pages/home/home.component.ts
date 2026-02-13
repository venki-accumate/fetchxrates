import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/features/hero/hero.component';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  badgeText?: string;
  cta: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pricingTiers: PricingTier[] = [
    {
      name: 'Basic',
      price: '$10',
      period: '/month',
      description: 'For small applications and startups',
      features: [
        '10,000 requests per month',
        'Latest + historical rates',
        'RBA data source',
        'Base currency - AUD',
        'Email support',
        'Full API documentation'
      ],
      cta: 'Get started'
    },
    {
      name: 'Professional',
      price: '$34',
      period: '/month',
      description: 'For growing businesses with higher volume',
      badgeText: 'RECOMMENDATION',
      features: [
        '200,000 requests per month',
        'Multiple data sources (RBA, ECB)',
        'Base Currency choice of AUD or EUR',
        'Batch requests',
        'Priority support',
        'Advanced analytics'
      ],
      cta: 'Get started'
    },
    {
      name: 'Business',
      price: '$68',
      period: '/month',
      description: 'For established companies with large-scale needs',
      features: [
        '600,000 requests per month',
        'All data sources (RBA, ECB, Fed, BOE)',
        'Base Currency: AUD, EUR, GBP, USD',
        'Dedicated account manager',
        '99.9% uptime SLA',
        'Custom integration support'
      ],
      cta: 'Get started'
    }
  ];

  selectedCodeTab: 'curl' | 'javascript' | 'python' | 'php' = 'curl';
  
  codeExamples: Record<'curl' | 'javascript' | 'python' | 'php', string> = {
    curl: `curl -X GET "https://api.fetchxrates.com/v1/latest" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
    javascript: `const response = await fetch('https://api.fetchxrates.com/v1/latest', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});
const data = await response.json();
console.log(data.rates);`,
    python: `import requests

response = requests.get(
  'https://api.fetchxrates.com/v1/latest',
  headers={'Authorization': 'Bearer YOUR_API_KEY'}
)
data = response.json()
print(data['rates'])`,
    php: `<?php
$ch = curl_init('https://api.fetchxrates.com/v1/latest');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  'Authorization: Bearer YOUR_API_KEY'
]);
$response = curl_exec($ch);
$data = json_decode($response, true);
echo $data['rates'];`
  };

  selectCodeTab(tab: 'curl' | 'javascript' | 'python' | 'php'): void {
    this.selectedCodeTab = tab;
  }

  copyCode(): void {
    const code = this.codeExamples[this.selectedCodeTab];
    navigator.clipboard.writeText(code);
  }
}
