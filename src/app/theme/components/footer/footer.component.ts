import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  standalone: true,
  template: `
    <div class="footer">
      <span>Created with &hearts; by <a href="https://akveo.com" target="_blank">Akveo</a> 2019</span>
      <span class="spacer"></span>
      <span>Powered by <a href="https://angular.dev" target="_blank">Angular</a></span>
    </div>
  `,
  styles: [`
    .footer { display:flex; align-items:center; padding:16px 24px; font-size:0.875rem; color:#8f9bb3; }
    .spacer { flex:1; }
    a { color:#3366ff; text-decoration:none; }
  `],
})
export class FooterComponent {}
