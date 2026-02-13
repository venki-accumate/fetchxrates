import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/shared/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    {
      icon: '🎯',
      title: 'Accuracy',
      description: 'We source exchange rates directly from the Reserve Bank of Australia, ensuring the highest accuracy and reliability for your applications.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Sub-100ms response times powered by global CDN infrastructure and optimized caching ensure your applications stay fast.'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Enterprise-grade security with API key authentication, rate limiting, and HTTPS encryption protects your data and applications.'
    },
    {
      icon: '💙',
      title: 'Developer-First',
      description: 'Clean API design, comprehensive documentation, and responsive support help you integrate quickly and build with confidence.'
    }
  ];

  team = [
    {
      name: 'Technical Team',
      role: 'Engineering & Operations',
      description: 'Experienced engineers maintaining reliable infrastructure and ensuring 99.9% uptime.'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated support professionals helping developers integrate and succeed with our API.'
    }
  ];
}
