import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/features/hero/hero.component';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent, PricingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
