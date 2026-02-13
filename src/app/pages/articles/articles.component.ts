import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articles = [
    {
      title: 'Understanding Exchange Rates: A Developer\'s Guide',
      excerpt: 'Learn the basics of exchange rates, how they work, and best practices for integrating currency data into your applications.',
      date: '2024-01-15',
      category: 'Tutorial'
    },
    {
      title: 'Best Practices for Currency Conversion in E-commerce',
      excerpt: 'Discover how to handle multi-currency pricing, rounding, and display in online stores to provide the best customer experience.',
      date: '2024-01-10',
      category: 'Guide'
    },
    {
      title: 'API Rate Limiting: What You Need to Know',
      excerpt: 'Understanding rate limits, how to handle them gracefully, and strategies for optimizing your API usage.',
      date: '2024-01-05',
      category: 'Technical'
    }
  ];
}
