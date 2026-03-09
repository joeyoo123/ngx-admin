import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'ngx-dialog-demo',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Dialog</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Click the button to open a dialog.</p>
        <button mat-flat-button color="primary" (click)="openDialog()">Open Dialog</button>
      </mat-card-content>
    </mat-card>
  `,
})
export class DialogDemoComponent {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(SampleDialogComponent);
  }
}

@Component({
  selector: 'ngx-sample-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Dialog Title</h2>
    <mat-dialog-content>This is a sample dialog content.</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button color="primary" mat-dialog-close>OK</button>
    </mat-dialog-actions>
  `,
})
export class SampleDialogComponent {}
