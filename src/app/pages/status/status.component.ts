import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../components/shared/badge/badge.component';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent implements OnInit {
  currentStatus: 'operational' | 'degraded' | 'outage' = 'operational';
  uptime = 99.97;
  
  services = [
    { name: 'API Endpoint', status: 'operational' as const, uptime: 99.98 },
    { name: 'Data Updates', status: 'operational' as const, uptime: 99.99 },
    { name: 'CDN', status: 'operational' as const, uptime: 99.95 },
    { name: 'Authentication', status: 'operational' as const, uptime: 100.0 }
  ];

  incidents = [
    {
      title: 'Scheduled Maintenance',
      status: 'resolved' as const,
      date: '2024-01-10',
      description: 'Database optimization and performance improvements completed successfully.'
    },
    {
      title: 'Brief API Slowdown',
      status: 'resolved' as const,
      date: '2023-12-15',
      description: 'Temporary increase in response times. Resolved by scaling infrastructure.'
    }
  ];

  metrics = [
    { label: 'Avg Response Time', value: '87ms', trend: 'down' },
    { label: 'Requests (24h)', value: '1.2M', trend: 'up' },
    { label: 'Success Rate', value: '99.98%', trend: 'stable' },
    { label: 'Uptime (30d)', value: '99.97%', trend: 'stable' }
  ];

  ngOnInit() {
    // In production, fetch real status from API
  }

  getStatusBadgeVariant(status: string): 'success' | 'warning' | 'danger' | 'info' | 'default' {
    switch (status) {
      case 'operational':
      case 'resolved':
        return 'success';
      case 'degraded':
        return 'warning';
      case 'outage':
        return 'danger';
      default:
        return 'info';
    }
  }
}
