import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  dashboardFeatures: Feature[] = [
    {
      icon: 'file_download',
      title: 'Download FX rates',
      description: 'Browse and download latest or historical exchange rates in Excel or CSV.'
    },
    {
      icon: 'table_chart',
      title: 'Spreadsheet currency conversion',
      description: 'Upload Excel/CSV, map date & currency columns, convert using correct historical rates.'
    },
    {
      icon: 'calendar_today',
      title: 'Historical accuracy',
      description: 'Every conversion uses the rate for the transaction date — not today\'s rate.'
    },
    {
      icon: 'settings',
      title: 'Custom rate support',
      description: 'Use system rates or upload your own FX rates for internal or contractual use.'
    },
    {
      icon: 'person',
      title: 'Built for non-technical users',
      description: 'No formulas, no scripts — clean inputs, clean outputs.'
    }
  ];

  apiFeatures: Feature[] = [
    {
      icon: 'flash_on',
      title: 'Fast, simple FX API',
      description: 'Clean JSON, predictable responses, easy to integrate.'
    },
    {
      icon: 'trending_up',
      title: 'Latest & historical rates',
      description: 'Query by date, currency pair, or convert amounts directly.'
    },
    {
      icon: 'account_balance',
      title: 'Trusted public data sources',
      description: 'Rates sourced from Reserve Bank of Australia, European Central Bank, Federal Reserve, and Bank of England (publicly available, transparently used).'
    },
    {
      icon: 'rocket_launch',
      title: 'Production-ready',
      description: 'Cached, stable, and designed for real systems — not demos.'
    },
    {
      icon: 'bar_chart',
      title: 'Clear limits',
      description: 'Simple request caps with no hidden throttling.'
    }
  ];

  useCases = [
    {
      title: 'E-commerce Platforms',
      description: 'Display real-time prices in multiple currencies for international customers.',
      icon: '🛒'
    },
    {
      title: 'Financial Applications',
      description: 'Power currency converters, portfolio trackers, and financial dashboards.',
      icon: '💰'
    },
    {
      title: 'Travel & Tourism',
      description: 'Help travelers understand costs and budget in their home currency.',
      icon: '✈️'
    },
    {
      title: 'Accounting Software',
      description: 'Automate foreign exchange calculations for international transactions.',
      icon: '📋'
    },
    {
      title: 'Data Analytics',
      description: 'Historical data for research, analysis, and forecasting models.',
      icon: '📊'
    },
    {
      title: 'Mobile Apps',
      description: 'Integrate currency data into iOS, Android, and cross-platform apps.',
      icon: '📱'
    }
  ];
}
