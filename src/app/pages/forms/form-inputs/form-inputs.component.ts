import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'ngx-form-inputs',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatRadioModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Inputs</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="form-grid">
          <mat-form-field appearance="outline"><mat-label>Default Input</mat-label><input matInput placeholder="Default"></mat-form-field>
          <mat-form-field appearance="fill"><mat-label>Fill Input</mat-label><input matInput placeholder="Fill"></mat-form-field>
          <mat-form-field appearance="outline"><mat-label>Email</mat-label><input matInput type="email" placeholder="Email"></mat-form-field>
          <mat-form-field appearance="outline"><mat-label>Password</mat-label><input matInput type="password" placeholder="Password"></mat-form-field>
          <mat-form-field appearance="outline"><mat-label>Disabled</mat-label><input matInput disabled value="Disabled"></mat-form-field>
          <mat-form-field appearance="outline"><mat-label>Textarea</mat-label><textarea matInput rows="3"></textarea></mat-form-field>
        </div>
        <h3>Select</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Select an option</mat-label>
          <mat-select><mat-option value="1">Option 1</mat-option><mat-option value="2">Option 2</mat-option><mat-option value="3">Option 3</mat-option></mat-select>
        </mat-form-field>
        <h3>Checkboxes</h3>
        <div class="checkbox-group">
          <mat-checkbox checked>Checkbox 1</mat-checkbox>
          <mat-checkbox>Checkbox 2</mat-checkbox>
          <mat-checkbox disabled>Disabled</mat-checkbox>
        </div>
        <h3>Radio Buttons</h3>
        <mat-radio-group>
          <mat-radio-button value="1">Option 1</mat-radio-button>
          <mat-radio-button value="2">Option 2</mat-radio-button>
          <mat-radio-button value="3" disabled>Disabled</mat-radio-button>
        </mat-radio-group>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.full-width{width:100%}.checkbox-group{display:flex;gap:16px;margin-bottom:16px}mat-radio-button{margin-right:16px}`],
})
export class FormInputsComponent {}
