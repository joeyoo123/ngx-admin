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
    <mat-nav-list>
      <ng-container *ngFor="let item of items">
        <div *ngIf="item.group" class="group-title">{{ item.title }}</div>
        <ng-container *ngIf="!item.group">
          <a mat-list-item *ngIf="item.link && !item.children" [routerLink]="item.link" routerLinkActive="active-link">
            <mat-icon matListItemIcon>{{ item.icon || 'circle' }}</mat-icon>
            <span matListItemTitle>{{ item.title }}</span>
          </a>
          <mat-expansion-panel *ngIf="item.children" class="menu-expansion">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon class="menu-icon">{{ item.icon || 'folder' }}</mat-icon>
                {{ item.title }}
              </mat-panel-title>
            </mat-expansion-panel-header>
            <mat-nav-list dense>
              <a mat-list-item *ngFor="let child of item.children" [routerLink]="child.link" routerLinkActive="active-link">
                <span matListItemTitle>{{ child.title }}</span>
              </a>
            </mat-nav-list>
          </mat-expansion-panel>
        </ng-container>
      </ng-container>
    </mat-nav-list>
  `,
  styles: [`
    :host { display: block; }
    .group-title { padding: 16px 16px 4px; font-size: 0.75rem; text-transform: uppercase; color: #8f9bb3; font-weight: 600; }
    .active-link { background: rgba(51, 102, 255, 0.08); color: #3366ff; }
    .menu-expansion { box-shadow: none !important; background: transparent; }
    .menu-icon { margin-right: 8px; font-size: 20px; }
    ::ng-deep .menu-expansion .mat-expansion-panel-body { padding: 0; }
  `],
})
export class SidenavMenuComponent {
  @Input() items: MenuItem[] = [];
}
