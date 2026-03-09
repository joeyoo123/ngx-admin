import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'ngx-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarMenuComponent, FooterComponent],
  template: `
    <div class="app-layout" [class.sidebar-collapsed]="sidebarCollapsed">
      <header class="app-header">
        <ngx-header (toggleSidebar)="toggleSidebar()"></ngx-header>
      </header>
      <div class="app-body">
        <aside class="app-sidebar" [class.collapsed]="sidebarCollapsed">
          <div class="sidebar-content">
            <ngx-sidebar-menu></ngx-sidebar-menu>
          </div>
        </aside>
        <main class="app-content">
          <div class="content-wrapper">
            <router-outlet></router-outlet>
          </div>
          <ngx-footer></ngx-footer>
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
    .app-layout {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .app-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 4.75rem;
      background: #222b45;
      display: flex;
      align-items: center;
      z-index: 1000;
      box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1);
    }
    .app-body {
      display: flex;
      flex: 1;
      margin-top: 4.75rem;
      min-height: 0;
    }
    .app-sidebar {
      width: 16rem;
      min-width: 16rem;
      background: #2a2f4a;
      height: calc(100vh - 4.75rem);
      position: fixed;
      top: 4.75rem;
      left: 0;
      overflow-y: auto;
      transition: all 0.3s ease;
      z-index: 999;
    }
    .app-sidebar.collapsed {
      margin-left: -16rem;
    }
    .sidebar-content {
      padding-top: 1rem;
    }
    .app-content {
      flex: 1;
      margin-left: 16rem;
      display: flex;
      flex-direction: column;
      min-height: calc(100vh - 4.75rem);
      transition: margin-left 0.3s ease;
      background: #edf1f7;
    }
    .sidebar-collapsed .app-content {
      margin-left: 0;
    }
    .content-wrapper {
      flex: 1;
      padding: 1.5rem;
    }
    @media (max-width: 768px) {
      .app-sidebar {
        margin-left: -16rem;
      }
      .app-sidebar:not(.collapsed) {
        margin-left: 0;
      }
      .app-content {
        margin-left: 0;
      }
    }
  `],
})
export class LayoutComponent {
  sidebarCollapsed = false;

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
