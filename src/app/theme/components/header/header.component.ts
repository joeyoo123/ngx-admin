import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSlideToggleModule, MatDividerModule, FormsModule],
  template: `
    <div class="header-container">
      <div class="left">
        <button mat-icon-button (click)="toggleSidenav.emit()" class="menu-btn">
          <mat-icon>menu</mat-icon>
        </button>
        <div class="search-box">
          <mat-icon class="search-icon">search</mat-icon>
          <input type="text" placeholder="Search..." class="search-input" />
        </div>
      </div>
      <div class="right">
        <button mat-icon-button class="header-icon-btn" title="Notifications">
          <mat-icon>notifications_none</mat-icon>
        </button>
        <div class="theme-toggle">
          <mat-icon class="theme-icon">{{ darkMode ? 'dark_mode' : 'light_mode' }}</mat-icon>
          <mat-slide-toggle [(ngModel)]="darkMode" (change)="toggleTheme()" color="primary"></mat-slide-toggle>
        </div>
        <div class="avatar-btn" [matMenuTriggerFor]="userMenu">
          <div class="avatar">JY</div>
          <span class="user-name">User</span>
          <mat-icon class="dropdown-icon">expand_more</mat-icon>
        </div>
        <mat-menu #userMenu="matMenu">
          <button mat-menu-item><mat-icon>person</mat-icon>Profile</button>
          <button mat-menu-item><mat-icon>settings</mat-icon>Settings</button>
          <mat-divider></mat-divider>
          <button mat-menu-item><mat-icon>logout</mat-icon>Log out</button>
        </mat-menu>
      </div>
    </div>
  `,
  styles: [`
    .header-container { display:flex; align-items:center; justify-content:space-between; width:100%; }
    .left { display:flex; align-items:center; gap:12px; }
    .right { display:flex; align-items:center; gap:4px; }
    .menu-btn { color: var(--text-secondary); }
    .search-box {
      display: flex; align-items: center; gap: 8px;
      background: var(--bg-primary); border-radius: 10px;
      padding: 6px 14px; min-width: 220px;
      border: 1px solid var(--border-color);
    }
    .search-icon { font-size: 18px; width: 18px; height: 18px; color: var(--text-hint); }
    .search-input {
      border: none; outline: none; background: transparent; font-size: 0.85rem;
      color: var(--text-primary); font-family: inherit; width: 100%;
    }
    .search-input::placeholder { color: var(--text-hint); }
    .header-icon-btn { color: var(--text-secondary); }
    .theme-toggle { display: flex; align-items: center; gap: 4px; margin: 0 4px; }
    .theme-icon { font-size: 18px; width: 18px; height: 18px; color: var(--text-secondary); }
    .avatar-btn {
      display: flex; align-items: center; gap: 8px; cursor: pointer;
      padding: 4px 8px 4px 4px; border-radius: 10px;
      transition: background 0.15s;
    }
    .avatar-btn:hover { background: var(--accent-bg); }
    .avatar {
      width: 32px; height: 32px; border-radius: 8px;
      background: linear-gradient(135deg, #3366ff 0%, #598bff 100%);
      color: #fff; font-size: 0.75rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
    }
    .user-name { font-size: 0.85rem; font-weight: 500; color: var(--text-primary); }
    .dropdown-icon { font-size: 18px; width: 18px; height: 18px; color: var(--text-secondary); }
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
