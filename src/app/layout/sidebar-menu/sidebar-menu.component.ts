import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  icon?: string;
  link?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'ngx-sidebar-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ul class="menu-items">
      @for (item of menuItems; track item.title) {
        <li class="menu-item" [class.expanded]="item.expanded">
          @if (item.children) {
            <a class="menu-link parent" (click)="toggleItem(item)">
              <span class="menu-icon">{{ item.icon }}</span>
              <span class="menu-title">{{ item.title }}</span>
              <span class="expand-icon">{{ item.expanded ? '&#9660;' : '&#9654;' }}</span>
            </a>
            @if (item.expanded) {
              <ul class="submenu">
                @for (child of item.children; track child.title) {
                  <li class="menu-item">
                    <a class="menu-link child"
                       [routerLink]="child.link"
                       routerLinkActive="active">
                      <span class="menu-title">{{ child.title }}</span>
                    </a>
                  </li>
                }
              </ul>
            }
          } @else {
            <a class="menu-link"
               [routerLink]="item.link"
               routerLinkActive="active">
              <span class="menu-icon">{{ item.icon }}</span>
              <span class="menu-title">{{ item.title }}</span>
            </a>
          }
        </li>
      }
    </ul>
  `,
  styles: [`
    :host {
      display: block;
    }
    .menu-items {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .menu-link {
      display: flex;
      align-items: center;
      padding: 0.75rem 1.5rem;
      color: #a4abb3;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.15s ease;
      font-size: 0.9375rem;
    }
    .menu-link:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.05);
    }
    .menu-link.active {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.08);
    }
    .menu-link.parent {
      justify-content: space-between;
    }
    .menu-icon {
      margin-right: 0.75rem;
      font-size: 1.25rem;
      width: 1.5rem;
      text-align: center;
    }
    .menu-title {
      flex: 1;
    }
    .expand-icon {
      font-size: 0.625rem;
      margin-left: 0.5rem;
    }
    .submenu {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .submenu .menu-link {
      padding-left: 3.5rem;
      font-size: 0.875rem;
    }
  `],
})
export class SidebarMenuComponent {
  menuItems: MenuItem[] = [
    {
      title: 'Charts',
      icon: '\u{1F4CA}',
      expanded: true,
      children: [
        { title: 'Echarts', link: '/pages/charts/echarts' },
        { title: 'Charts.js', link: '/pages/charts/chartjs' },
        { title: 'D3', link: '/pages/charts/d3' },
      ],
    },
  ];

  toggleItem(item: MenuItem): void {
    item.expanded = !item.expanded;
  }
}
