import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

export interface MenuItem {
  title: string;
  icon?: string;
  link?: string;
  children?: MenuItem[];
  group?: boolean;
  home?: boolean;
}

@Component({
  selector: 'ngx-sidenav-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatListModule, MatIconModule, MatExpansionModule],
  template: `
    <mat-nav-list class="sidebar-nav">
      <ng-container *ngFor="let item of items">
        <div *ngIf="item.group" class="group-title">{{ item.title }}</div>
        <ng-container *ngIf="!item.group">
          <a mat-list-item *ngIf="item.link && !item.children" [routerLink]="item.link" routerLinkActive="active-link" class="nav-item">
            <mat-icon matListItemIcon class="nav-icon">{{ item.icon || 'circle' }}</mat-icon>
            <span matListItemTitle class="nav-label">{{ item.title }}</span>
          </a>
          <mat-expansion-panel *ngIf="item.children" class="menu-expansion">
            <mat-expansion-panel-header>
              <mat-panel-title class="panel-title">
                <mat-icon class="nav-icon">{{ item.icon || 'folder' }}</mat-icon>
                <span class="nav-label">{{ item.title }}</span>
              </mat-panel-title>
            </mat-expansion-panel-header>
            <mat-nav-list dense class="child-nav">
              <a mat-list-item *ngFor="let child of item.children" [routerLink]="child.link" routerLinkActive="active-link" class="child-item">
                <span class="child-dot"></span>
                <span matListItemTitle class="nav-label">{{ child.title }}</span>
              </a>
            </mat-nav-list>
          </mat-expansion-panel>
        </ng-container>
      </ng-container>
    </mat-nav-list>
  `,
  styles: [`
    :host { display: block; padding: 8px 12px; }
    .group-title {
      padding: 20px 12px 6px; font-size: 0.65rem; text-transform: uppercase;
      color: var(--sidebar-text-muted); font-weight: 700; letter-spacing: 0.1em;
    }
    .nav-item, .child-item {
      border-radius: 8px !important; margin-bottom: 2px;
      color: var(--sidebar-text) !important; transition: all 0.15s ease;
    }
    .nav-item:hover, .child-item:hover {
      background: var(--sidebar-hover-bg) !important;
    }
    .active-link {
      background: var(--sidebar-active-bg) !important;
      color: #fff !important;
    }
    .active-link .nav-icon { color: var(--accent-light) !important; }
    .nav-icon {
      color: var(--sidebar-text-muted) !important; font-size: 20px !important;
      width: 20px !important; height: 20px !important; margin-right: 12px;
      transition: color 0.15s;
    }
    .nav-label { font-size: 0.85rem; font-weight: 500; }
    .menu-expansion {
      box-shadow: none !important; background: transparent !important;
      margin-bottom: 2px;
    }
    .panel-title { color: var(--sidebar-text) !important; display: flex; align-items: center; }
    .child-nav { padding: 0 0 0 8px !important; }
    .child-item { padding-left: 24px !important; }
    .child-dot {
      width: 5px; height: 5px; border-radius: 50%; margin-right: 12px;
      background: var(--sidebar-text-muted); display: inline-block; flex-shrink: 0;
    }
    .active-link .child-dot { background: var(--accent-light); }
    ::ng-deep .menu-expansion .mat-expansion-panel-body { padding: 0 !important; }
    ::ng-deep .menu-expansion .mat-expansion-panel-header {
      padding: 0 12px !important; border-radius: 8px !important;
      color: var(--sidebar-text) !important;
    }
    ::ng-deep .menu-expansion .mat-expansion-panel-header:hover {
      background: var(--sidebar-hover-bg) !important;
    }
    ::ng-deep .menu-expansion .mat-expansion-indicator::after {
      color: var(--sidebar-text-muted) !important;
    }
  `],
})
export class SidenavMenuComponent {
  @Input() items: MenuItem[] = [];
}
