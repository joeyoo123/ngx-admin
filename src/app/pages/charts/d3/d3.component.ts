import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ngx-d3',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="row">
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>D3 Bar Chart</mat-card-title></mat-card-header>
        <mat-card-content><div class="chart-placeholder"><p>D3/ngx-charts bar chart visualization</p></div></mat-card-content>
      </mat-card>
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>D3 Pie Chart</mat-card-title></mat-card-header>
        <mat-card-content><div class="chart-placeholder"><p>D3/ngx-charts pie chart visualization</p></div></mat-card-content>
      </mat-card>
    </div>
    <div class="row">
      <mat-card class="chart-card full">
        <mat-card-header><mat-card-title>D3 Line Chart</mat-card-title></mat-card-header>
        <mat-card-content><div class="chart-placeholder"><p>D3/ngx-charts line chart visualization</p></div></mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`.row{display:flex;gap:24px;margin-bottom:24px;flex-wrap:wrap}.chart-card{flex:1;min-width:400px}.chart-card.full{flex:1 1 100%}.chart-placeholder{text-align:center;padding:48px;color:#8f9bb3}`],
})
export class D3Component {}
