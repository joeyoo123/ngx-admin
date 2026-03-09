import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ngx-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatProgressSpinnerModule],
  template: `
    <h2>Login</h2>
    <p class="subtitle">Hello! Log in with your email.</p>
    <div *ngIf="messages.length > 0" class="messages success"><div *ngFor="let msg of messages">{{ msg }}</div></div>
    <div *ngIf="errors.length > 0" class="messages error"><div *ngFor="let err of errors">{{ err }}</div></div>
    <form (ngSubmit)="login()">
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Email address</mat-label>
        <input matInput type="email" [(ngModel)]="email" name="email" required>
        <mat-icon matPrefix>email</mat-icon>
      </mat-form-field>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Password</mat-label>
        <input matInput [type]="hidePassword ? 'password' : 'text'" [(ngModel)]="password" name="password" required>
        <mat-icon matPrefix>lock</mat-icon>
        <button mat-icon-button matSuffix (click)="hidePassword = !hidePassword" type="button">
          <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
        </button>
      </mat-form-field>
      <mat-checkbox [(ngModel)]="rememberMe" name="rememberMe">Remember me</mat-checkbox>
      <button mat-flat-button color="primary" type="submit" class="full-width submit-btn" [disabled]="loading">
        <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
        <span *ngIf="!loading">Log In</span>
      </button>
    </form>
    <div class="links"><a routerLink="/auth/request-password">Forgot Password?</a><a routerLink="/auth/register">Register</a></div>
  `,
  styles: [`:host{display:block}h2{margin:0 0 8px}.subtitle{color:#8f9bb3;margin-bottom:24px}.full-width{width:100%}.submit-btn{margin:16px 0;height:48px}.links{display:flex;justify-content:space-between;margin-top:16px}.messages{padding:12px;border-radius:4px;margin-bottom:16px}.success{background:#e8f5e9;color:#2e7d32}.error{background:#ffebee;color:#c62828}`],
})
export class LoginComponent {
  email = ''; password = ''; rememberMe = false; hidePassword = true; loading = false;
  messages: string[] = []; errors: string[] = [];
  constructor(private authService: AuthService, private router: Router) {}
  login() {
    this.loading = true; this.messages = []; this.errors = [];
    this.authService.login(this.email, this.password).subscribe(result => {
      this.loading = false;
      if (result.success) { this.messages = result.messages; setTimeout(() => this.router.navigate(['/pages']), 1000); }
      else { this.errors = result.errors; }
    });
  }
}
