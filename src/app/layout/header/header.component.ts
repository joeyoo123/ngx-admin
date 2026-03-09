import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-header',
  standalone: true,
  template: `
    <div class="header-container">
      <div class="header-left">
        <button class="sidebar-toggle btn btn-link" (click)="toggleSidebar.emit()">
          <span class="hamburger-icon">&#9776;</span>
        </button>
        <a class="logo" href="/">ngx-admin</a>
      </div>
      <div class="header-right">
        <span class="header-label">Angular 19 Charts Demo</span>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      width: 100%;
    }
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 1rem;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .sidebar-toggle {
      font-size: 1.5rem;
      color: #ffffff;
      text-decoration: none;
      padding: 0;
      line-height: 1;
    }
    .hamburger-icon {
      font-size: 1.5rem;
    }
    .logo {
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .logo:hover {
      color: #ffffff;
      text-decoration: none;
    }
    .header-right {
      display: flex;
      align-items: center;
    }
    .header-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.875rem;
    }
  `],
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
}
