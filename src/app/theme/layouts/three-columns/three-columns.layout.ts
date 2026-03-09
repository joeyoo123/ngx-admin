import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidenavMenuComponent, MenuItem } from '../../components/sidenav-menu/sidenav-menu.component';
import { MENU_ITEMS } from '../../../pages/pages-menu';

@Component({
  selector: 'ngx-three-columns-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatToolbarModule, HeaderComponent, FooterComponent, SidenavMenuComponent],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav mode="side" opened class="sidenav">
        <div class="logo-container"><h2 class="logo">ngx-admin</h2></div>
        <ngx-sidenav-menu [items]="menuItems"></ngx-sidenav-menu>
      </mat-sidenav>
      <mat-sidenav-content class="content-container">
        <mat-toolbar color="primary"><ngx-header (toggleSidenav)="sidenav.toggle()"></ngx-header></mat-toolbar>
        <div class="columns">
          <div class="column left"><ng-content select="[left]"></ng-content></div>
          <div class="column center"><router-outlet></router-outlet></div>
          <div class="column right"><ng-content select="[right]"></ng-content></div>
        </div>
        <ngx-footer></ngx-footer>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`:host{display:flex;height:100vh}.sidenav-container{flex:1}.sidenav{width:256px}.logo-container{padding:16px 24px;border-bottom:1px solid #edf1f7}.logo{margin:0;font-size:1.25rem;font-weight:700;color:#3366ff}.columns{display:flex;padding:24px;gap:24px;min-height:calc(100vh - 128px)}.column{flex:1}.column.center{flex:2}.content-container{display:flex;flex-direction:column}`],
})
export class ThreeColumnsLayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  menuItems: MenuItem[] = MENU_ITEMS;
}
