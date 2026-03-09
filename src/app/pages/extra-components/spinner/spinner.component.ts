import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'ngx-spinner-page',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinnerModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Spinner</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="spinner-row">
          <div class="spinner-item"><mat-spinner diameter="40"></mat-spinner><span>Default</span></div>
          <div class="spinner-item"><mat-spinner diameter="60" color="accent"></mat-spinner><span>Accent</span></div>
          <div class="spinner-item"><mat-spinner diameter="80" color="warn"></mat-spinner><span>Warn</span></div>
          <div class="spinner-item"><mat-progress-spinner mode="determinate" [value]="75" diameter="80"></mat-progress-spinner><span>75%</span></div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.spinner-row{display:flex;gap:32px;align-items:center;flex-wrap:wrap}.spinner-item{display:flex;flex-direction:column;align-items:center;gap:8px}`],
})
export class SpinnerComponent {}
