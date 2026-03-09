import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  standalone: true,
  template: `
    <div class="footer">
      <span>Created with &hearts; by <a href="https://akveo.com" target="_blank">Akveo</a> 2019</span>
      <span class="spacer"></span>
      <span>Powered by <a href="https://angular.dev" target="_blank">Angular 19</a></span>
    </div>
  `,
  styles: [`
    .footer {
      display:flex; align-items:center; padding:16px 28px;
      font-size:0.8rem; color:var(--text-hint);
      border-top:1px solid var(--border-color);
    }
    .spacer { flex:1; }
    a { color:var(--accent); text-decoration:none; font-weight:500; }
    a:hover { text-decoration:underline; }
  `],
})
export class FooterComponent {}
