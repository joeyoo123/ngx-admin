import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-toastr-demo',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Toastr / Snackbar</mat-card-title></mat-card-header>
      <mat-card-content>
        <mat-form-field appearance="outline" class="fw">
          <mat-label>Message</mat-label>
          <input matInput [(ngModel)]="message">
        </mat-form-field>
        <mat-form-field appearance="outline" class="fw">
          <mat-label>Position</mat-label>
          <mat-select [(ngModel)]="position">
            <mat-option value="top">Top</mat-option>
            <mat-option value="bottom">Bottom</mat-option>
          </mat-select>
        </mat-form-field>
        <div class="btn-row">
          <button mat-flat-button color="primary" (click)="showToast()">Show Toast</button>
          <button mat-flat-button color="accent" (click)="showToast()">Info</button>
          <button mat-flat-button color="warn" (click)="showToast()">Warning</button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.fw{width:100%}.btn-row{display:flex;gap:16px}`],
})
export class ToastrDemoComponent {
  message = 'Hello! This is a toast message.';
  position = 'bottom';

  constructor(private snackBar: MatSnackBar) {}

  showToast() {
    this.snackBar.open(this.message, 'Close', {
      duration: 3000,
      verticalPosition: this.position as 'top' | 'bottom',
    });
  }
}
