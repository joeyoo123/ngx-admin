import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  standalone: true,
  template: `
    <span class="created-by">
      Created with &#9829; by <b><a href="https://akveo.page.link/8V2f" target="_blank">Akveo</a></b> 2019
    </span>
    <div class="socials">
      <a href="https://github.com/akveo/ngx-admin" target="_blank"><i class="socicon-github"></i> GitHub</a>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.25rem 1.5rem;
      border-top: 1px solid #ebeef2;
      color: #a4abb3;
      font-size: 0.875rem;
    }
    a {
      color: #7659ff;
      text-decoration: none;
    }
    a:hover {
      color: #5a3fd6;
    }
    .socials {
      display: flex;
      gap: 1rem;
    }
  `],
})
export class FooterComponent {}
