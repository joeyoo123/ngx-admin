import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'ngx-form-layouts',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
  template: `
    <div class="row">
      <mat-card class="half">
        <mat-card-header><mat-card-title>Inline Form</mat-card-title></mat-card-header>
        <mat-card-content>
          <div class="inline-form">
            <mat-form-field appearance="outline"><mat-label>Jane</mat-label><input matInput></mat-form-field>
            <mat-form-field appearance="outline"><mat-label>Doe</mat-label><input matInput></mat-form-field>
            <button mat-flat-button color="primary">Submit</button>
          </div>
        </mat-card-content>
      </mat-card>
      <mat-card class="half">
        <mat-card-header><mat-card-title>Horizontal Form</mat-card-title></mat-card-header>
        <mat-card-content>
          <mat-form-field appearance="outline" class="fw"><mat-label>Email</mat-label><input matInput type="email"></mat-form-field>
          <mat-form-field appearance="outline" class="fw"><mat-label>Password</mat-label><input matInput type="password"></mat-form-field>
          <mat-checkbox>Remember me</mat-checkbox><br>
          <button mat-flat-button color="primary">Sign In</button>
        </mat-card-content>
      </mat-card>
    </div>
    <div class="row">
      <mat-card class="half">
        <mat-card-header><mat-card-title>Basic Form</mat-card-title></mat-card-header>
        <mat-card-content>
          <mat-form-field appearance="outline" class="fw"><mat-label>First Name</mat-label><input matInput></mat-form-field>
          <mat-form-field appearance="outline" class="fw"><mat-label>Last Name</mat-label><input matInput></mat-form-field>
          <mat-form-field appearance="outline" class="fw"><mat-label>Email</mat-label><input matInput type="email"></mat-form-field>
          <mat-form-field appearance="outline" class="fw"><mat-label>Website</mat-label><input matInput></mat-form-field>
          <button mat-flat-button color="primary">Submit</button>
        </mat-card-content>
      </mat-card>
      <mat-card class="half">
        <mat-card-header><mat-card-title>Block Form</mat-card-title></mat-card-header>
        <mat-card-content>
          <mat-form-field appearance="outline" class="fw"><mat-label>First Name</mat-label><input matInput></mat-form-field>
          <mat-form-field appearance="outline" class="fw"><mat-label>Last Name</mat-label><input matInput></mat-form-field>
          <mat-form-field appearance="outline" class="fw"><mat-label>Email</mat-label><input matInput type="email"></mat-form-field>
          <button mat-flat-button color="primary" class="fw">Submit</button>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`.row{display:flex;gap:24px;margin-bottom:24px;flex-wrap:wrap}.half{flex:1;min-width:400px}.fw{width:100%}.inline-form{display:flex;gap:16px;align-items:center}`],
})
export class FormLayoutsComponent {}
