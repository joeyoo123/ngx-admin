import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSlideToggleModule, FormsModule],
  template: `
    <div class="header-container">
      <div class="left">
        <button mat-icon-button (click)="toggleSidenav.emit()">
          <mat-icon>menu</mat-icon>
        </button>
        <a class="logo" href="/">ngx-admin</a>
      </div>
      <div class="right">
        <mat-slide-toggle [(ngModel)]="darkMode" (change)="toggleTheme()">
          <mat-icon>{{ darkMode ? 'dark_mode' : 'light_mode' }}</mat-icon>
        </mat-slide-toggle>
        <button mat-icon-button [matMenuTriggerFor]="userMenu">
          <mat-icon>person</mat-icon>
        </button>
        <mat-menu #userMenu="matMenu">
          <button mat-menu-item><mat-icon>person</mat-icon>Profile</button>
          <button mat-menu-item><mat-icon>logout</mat-icon>Log out</button>
        </mat-menu>
      </div>
    </div>
  `,
  styles: [`
    .header-container { display:flex; align-items:center; justify-content:space-between; width:100%; }
    .left { display:flex; align-items:center; gap:8px; }
    .right { display:flex; align-items:center; gap:8px; }
    .logo { font-size:1.25rem; font-weight:700; color:inherit; text-decoration:none; }
  `],
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  darkMode = false;

  toggleTheme() {
    document.body.classList.toggle('dark-theme', this.darkMode);
    document.body.classList.toggle('light-theme', !this.darkMode);
  }
}
