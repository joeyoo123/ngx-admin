import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ngx-icons',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Material Icons</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="icons-grid">
          <div *ngFor="let icon of icons" class="icon-item">
            <mat-icon>{{ icon }}</mat-icon>
            <span>{{ icon }}</span>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.icons-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:16px}.icon-item{display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px;border-radius:4px;cursor:pointer}.icon-item:hover{background:#f0f0f0}.icon-item span{font-size:0.75rem;color:#8f9bb3;text-align:center}`],
})
export class IconsComponent {
  icons = ['home', 'person', 'settings', 'email', 'star', 'favorite', 'search', 'delete', 'add', 'edit', 'visibility', 'lock', 'shopping_cart', 'dashboard', 'bar_chart', 'map', 'cloud', 'attach_file', 'calendar_today', 'notifications', 'chat', 'phone', 'photo', 'print', 'save', 'share', 'thumb_up', 'warning', 'check_circle', 'info', 'error', 'help'];
}
