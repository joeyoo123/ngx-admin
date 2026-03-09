import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'ngx-window-demo',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Window</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Open a window-style dialog overlay.</p>
        <button mat-flat-button color="primary" (click)="openWindow()">Open Window</button>
      </mat-card-content>
    </mat-card>
  `,
})
export class WindowDemoComponent {
  constructor(private dialog: MatDialog) {}
  openWindow() {
    this.dialog.open(WindowContentComponent, { width: '600px', height: '400px' });
  }
}

@Component({
  selector: 'ngx-window-content',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Window Title</h2>
    <mat-dialog-content><p>This is window content. It acts like a floating panel.</p></mat-dialog-content>
    <mat-dialog-actions align="end"><button mat-button mat-dialog-close>Close</button></mat-dialog-actions>
  `,
})
export class WindowContentComponent {}
