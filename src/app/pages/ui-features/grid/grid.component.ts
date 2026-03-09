import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ngx-grid',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Grid System</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="grid-demo">
          <div class="grid-row" *ngFor="let cols of gridLayouts">
            <div *ngFor="let col of cols" [style.flex]="col" class="grid-col">
              <div class="grid-cell">{{ col === 1 ? '1/'+cols.length : col }}</div>
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.grid-demo{margin:16px 0}.grid-row{display:flex;gap:8px;margin-bottom:8px}.grid-col{min-height:48px}.grid-cell{background:#3366ff22;border:1px solid #3366ff44;border-radius:4px;padding:12px;text-align:center;height:100%;display:flex;align-items:center;justify-content:center}`],
})
export class GridComponent {
  gridLayouts = [
    [1, 1, 1, 1], [1, 1, 1], [1, 1], [1, 2], [2, 1], [1],
  ];
}
