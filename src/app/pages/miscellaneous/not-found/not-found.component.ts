import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ngx-not-found',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule],
  template: `
    <div class="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you were looking for doesn't exist.</p>
      <a mat-flat-button color="primary" routerLink="/pages/dashboard">
        <mat-icon>home</mat-icon> Take me home
      </a>
    </div>
  `,
  styles: [`
    .not-found{text-align:center;padding:80px 24px}
    h1{font-size:8rem;font-weight:700;color:#3366ff;margin:0;line-height:1}
    h2{font-size:2rem;margin:16px 0}
    p{color:#8f9bb3;margin-bottom:32px}
  `],
})
export class NotFoundComponent {}
