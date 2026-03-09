import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ngx-request-password', standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  template: `
    <h2>Forgot Password</h2><p class="sub">Enter your email and we'll send a reset link</p>
    <div *ngIf="messages.length" class="msg"><div *ngFor="let m of messages">{{m}}</div></div>
    <form (ngSubmit)="req()">
      <mat-form-field appearance="outline" class="fw"><mat-label>Email</mat-label><input matInput type="email" [(ngModel)]="email" name="email" required><mat-icon matPrefix>email</mat-icon></mat-form-field>
      <button mat-flat-button color="primary" type="submit" class="fw btn" [disabled]="loading"><mat-spinner *ngIf="loading" diameter="20"></mat-spinner><span *ngIf="!loading">Request Password</span></button>
    </form>
    <div class="links"><a routerLink="/auth/login">Back to Log In</a></div>
  `,
  styles: [`:host{display:block}.fw{width:100%}.btn{margin:16px 0;height:48px}.sub{color:#8f9bb3;margin-bottom:24px}.links{text-align:center;margin-top:16px}.msg{padding:12px;border-radius:4px;margin-bottom:16px;background:#e8f5e9;color:#2e7d32}`],
})
export class RequestPasswordComponent {
  email='';loading=false;messages:string[]=[];
  constructor(private auth: AuthService) {}
  req() { this.loading=true;this.messages=[];this.auth.requestPassword(this.email).subscribe(r=>{this.loading=false;this.messages=r.messages;}); }
}
