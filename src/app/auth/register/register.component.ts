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
  selector: 'ngx-register', standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatProgressSpinnerModule],
  template: `
    <h2>Register</h2><p class="subtitle">Create your account</p>
    <div *ngIf="messages.length" class="msg success"><div *ngFor="let m of messages">{{m}}</div></div>
    <form (ngSubmit)="register()">
      <mat-form-field appearance="outline" class="fw"><mat-label>Full name</mat-label><input matInput [(ngModel)]="fullName" name="fullName" required></mat-form-field>
      <mat-form-field appearance="outline" class="fw"><mat-label>Email</mat-label><input matInput type="email" [(ngModel)]="email" name="email" required></mat-form-field>
      <mat-form-field appearance="outline" class="fw"><mat-label>Password</mat-label><input matInput type="password" [(ngModel)]="password" name="password" required></mat-form-field>
      <mat-form-field appearance="outline" class="fw"><mat-label>Confirm Password</mat-label><input matInput type="password" [(ngModel)]="confirmPassword" name="confirmPassword" required></mat-form-field>
      <mat-checkbox [(ngModel)]="agreeTerms" name="agree">Agree to Terms</mat-checkbox>
      <button mat-flat-button color="primary" type="submit" class="fw btn" [disabled]="loading"><mat-spinner *ngIf="loading" diameter="20"></mat-spinner><span *ngIf="!loading">Register</span></button>
    </form>
    <div class="links"><a routerLink="/auth/login">Back to Log In</a></div>
  `,
  styles: [`:host{display:block}.fw{width:100%}.btn{margin:16px 0;height:48px}.subtitle{color:#8f9bb3;margin-bottom:24px}.links{text-align:center;margin-top:16px}.msg{padding:12px;border-radius:4px;margin-bottom:16px}.success{background:#e8f5e9;color:#2e7d32}`],
})
export class RegisterComponent {
  fullName='';email='';password='';confirmPassword='';agreeTerms=false;loading=false;messages:string[]=[];
  constructor(private auth: AuthService, private router: Router) {}
  register() { this.loading=true;this.messages=[];this.auth.register(this.fullName,this.email,this.password).subscribe(r=>{this.loading=false;this.messages=r.messages;if(r.success)setTimeout(()=>this.router.navigate(['/auth/login']),1500);}); }
}
