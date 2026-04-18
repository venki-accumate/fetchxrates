import { Component, signal } from '@angular/core';
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
  selectedIndex = signal<number>(0);

  selectFeature(index: number): void {
    this.selectedIndex.set(index);
  }
  features: Feature[] = [
  {
    icon: 'table_chart',
    title: 'Spreadsheet FX conversion',
    description: 'Convert Excel and CSV files using the correct rate for each row based on transaction date. Dashboard only.'
  },
  {
    icon: 'schedule',
    title: 'Latest rates (T-1)',
    description: 'Get the latest available published rates, typically from the previous business day.'
  },
  {
    icon: 'history',
    title: 'Historical data from 2000',
    description: 'Access long-range historical exchange rate data for analysis, reporting, and reconciliations.'
  },
  {
    icon: 'account_balance',
    title: 'Published rate access',
    description: 'Work with published rates from trusted public and central-bank-backed sources.'
  },
  {
    icon: 'bar_chart',
    title: 'Charts and statistics',
    description: 'View trends, compare currencies, and analyse movements with built-in visual tools. Dashboard only.'
  },
  {
    icon: 'event_repeat',
    title: 'Scheduled delivery',
    description: 'Automate recurring delivery of exchange rate data without manual downloads. Dashboard only.'
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
