import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ngx-progress-bar',
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Progress Bar</mat-card-title></mat-card-header>
      <mat-card-content>
        <h3>Determinate</h3>
        <mat-progress-bar mode="determinate" [value]="value"></mat-progress-bar>
        <div class="controls">
          <button mat-flat-button (click)="decrease()">-25</button>
          <span>{{ value }}%</span>
          <button mat-flat-button (click)="increase()">+25</button>
        </div>
        <h3>Indeterminate</h3>
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        <h3>Buffer</h3>
        <mat-progress-bar mode="buffer" [value]="value" [bufferValue]="bufferValue"></mat-progress-bar>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.controls{display:flex;align-items:center;gap:16px;margin:16px 0}h3{margin-top:24px}`],
})
export class ProgressBarComponent {
  value = 50;
  bufferValue = 75;
  increase() { this.value = Math.min(100, this.value + 25); }
  decrease() { this.value = Math.max(0, this.value - 25); }
}
