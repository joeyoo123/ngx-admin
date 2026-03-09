import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ngx-reset-password', standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  template: `
    <h2>Change Password</h2><p class="sub">Set a new password</p>
    <div *ngIf="messages.length" class="msg"><div *ngFor="let m of messages">{{m}}</div></div>
    <form (ngSubmit)="reset()">
      <mat-form-field appearance="outline" class="fw"><mat-label>New Password</mat-label><input matInput type="password" [(ngModel)]="pw" name="pw" required></mat-form-field>
      <mat-form-field appearance="outline" class="fw"><mat-label>Confirm Password</mat-label><input matInput type="password" [(ngModel)]="cpw" name="cpw" required></mat-form-field>
      <button mat-flat-button color="primary" type="submit" class="fw btn" [disabled]="loading"><mat-spinner *ngIf="loading" diameter="20"></mat-spinner><span *ngIf="!loading">Change Password</span></button>
    </form>
    <div class="links"><a routerLink="/auth/login">Back to Log In</a></div>
  `,
  styles: [`:host{display:block}.fw{width:100%}.btn{margin:16px 0;height:48px}.sub{color:#8f9bb3;margin-bottom:24px}.links{text-align:center;margin-top:16px}.msg{padding:12px;border-radius:4px;margin-bottom:16px;background:#e8f5e9;color:#2e7d32}`],
})
export class ResetPasswordComponent {
  pw='';cpw='';loading=false;messages:string[]=[];
  constructor(private auth: AuthService, private router: Router) {}
  reset() { this.loading=true;this.messages=[];this.auth.resetPassword(this.pw).subscribe(r=>{this.loading=false;this.messages=r.messages;setTimeout(()=>this.router.navigate(['/auth/login']),1500);}); }
}
