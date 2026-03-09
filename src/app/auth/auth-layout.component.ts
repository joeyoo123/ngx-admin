import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ngx-auth-layout',
  standalone: true,
  imports: [RouterOutlet, MatCardModule],
  template: `
    <div class="auth-container">
      <mat-card class="auth-card">
        <router-outlet></router-outlet>
      </mat-card>
    </div>
  `,
  styles: [`
    .auth-container { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: linear-gradient(135deg, #3366ff 0%, #598bff 100%); }
    .auth-card { width: 100%; max-width: 460px; padding: 32px; }
  `],
})
export class AuthLayoutComponent {}
