import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidenavMenuComponent, MenuItem } from '../../components/sidenav-menu/sidenav-menu.component';
import { MENU_ITEMS } from '../../../pages/pages-menu';

@Component({
  selector: 'ngx-one-column-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatToolbarModule, MatIconModule, HeaderComponent, FooterComponent, SidenavMenuComponent],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav mode="side" opened class="sidenav">
        <div class="logo-container">
          <div class="logo-row">
            <div class="logo-icon">
              <mat-icon>dashboard_customize</mat-icon>
            </div>
            <span class="logo-text">ngx-admin</span>
          </div>
          <span class="logo-sub">Angular 19 + Material</span>
        </div>
        <ngx-sidenav-menu [items]="menuItems"></ngx-sidenav-menu>
      </mat-sidenav>
      <mat-sidenav-content class="content-container">
        <mat-toolbar class="toolbar">
          <ngx-header (toggleSidenav)="sidenav.toggle()"></ngx-header>
        </mat-toolbar>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
        <ngx-footer></ngx-footer>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    :host { display: flex; height: 100vh; }
    .sidenav-container { flex: 1; }
    .sidenav {
      width: 264px;
      background: var(--sidebar-bg) !important;
      border-right: none !important;
      color: var(--sidebar-text);
    }
    .logo-container {
      padding: 24px 24px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .logo-row {
      display: flex; align-items: center; gap: 10px;
    }
    .logo-icon {
      width: 36px; height: 36px; border-radius: 10px;
      background: linear-gradient(135deg, #3366ff 0%, #598bff 100%);
      display: flex; align-items: center; justify-content: center;
      color: #fff; font-size: 18px;
    }
    .logo-icon mat-icon { font-size: 20px; width: 20px; height: 20px; }
    .logo-text {
      font-size: 1.2rem; font-weight: 700; color: #fff;
      letter-spacing: -0.02em;
    }
    .logo-sub {
      display: block; font-size: 0.7rem;
      color: rgba(255,255,255,0.4); margin-top: 6px; padding-left: 46px;
      letter-spacing: 0.02em;
    }
    .toolbar {
      position: sticky; top: 0; z-index: 10;
      background: var(--header-bg) !important;
      box-shadow: var(--header-shadow) !important;
      border-bottom: 1px solid var(--border-color) !important;
    }
    .content { padding: 28px; min-height: calc(100vh - 128px); }
    .content-container { display: flex; flex-direction: column; background: var(--bg-primary); }
  `],
})
export class OneColumnLayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  menuItems: MenuItem[] = MENU_ITEMS;
}
