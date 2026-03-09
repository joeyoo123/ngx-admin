import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ngx-alert',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Alert</mat-card-title></mat-card-header>
      <mat-card-content>
        <div *ngFor="let alert of alerts" class="alert" [class]="alert.type">
          <mat-icon>{{ alert.icon }}</mat-icon>
          <span>{{ alert.message }}</span>
          <button mat-icon-button (click)="dismiss(alert)"><mat-icon>close</mat-icon></button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.alert{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:4px;margin-bottom:12px}.alert span{flex:1}.info{background:#e3f2fd;color:#1565c0}.success{background:#e8f5e9;color:#2e7d32}.warning{background:#fff3e0;color:#e65100}.danger{background:#ffebee;color:#c62828}`],
})
export class AlertComponent {
  alerts = [
    { type: 'info', icon: 'info', message: 'This is an info alert.' },
    { type: 'success', icon: 'check_circle', message: 'This is a success alert.' },
    { type: 'warning', icon: 'warning', message: 'This is a warning alert.' },
    { type: 'danger', icon: 'error', message: 'This is a danger alert.' },
  ];
  dismiss(alert: any) { this.alerts = this.alerts.filter(a => a !== alert); }
}
