import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'ngx-chartjs',
  standalone: true,
  imports: [CommonModule, MatCardModule, BaseChartDirective],
  template: `
    <div class="row">
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Line Chart</mat-card-title></mat-card-header>
        <mat-card-content><canvas baseChart [datasets]="lineChartData" [labels]="lineChartLabels" [options]="chartOptions" [type]="'line'"></canvas></mat-card-content>
      </mat-card>
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Bar Chart</mat-card-title></mat-card-header>
        <mat-card-content><canvas baseChart [datasets]="barChartData" [labels]="lineChartLabels" [options]="chartOptions" [type]="'bar'"></canvas></mat-card-content>
      </mat-card>
    </div>
    <div class="row">
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Pie Chart</mat-card-title></mat-card-header>
        <mat-card-content><canvas baseChart [datasets]="pieChartData" [labels]="pieChartLabels" [options]="chartOptions" [type]="'pie'"></canvas></mat-card-content>
      </mat-card>
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Radar Chart</mat-card-title></mat-card-header>
        <mat-card-content><canvas baseChart [datasets]="radarChartData" [labels]="radarLabels" [options]="chartOptions" [type]="'radar'"></canvas></mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`.row{display:flex;gap:24px;margin-bottom:24px;flex-wrap:wrap}.chart-card{flex:1;min-width:400px}`],
})
export class ChartjsComponent {
  lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', borderColor: '#3366ff', backgroundColor: 'rgba(51,102,255,0.1)', tension: 0.4, fill: true, pointBackgroundColor: '#3366ff' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', borderColor: '#00d68f', backgroundColor: 'rgba(0,214,143,0.1)', tension: 0.4, fill: true, pointBackgroundColor: '#00d68f' },
  ];
  barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#3366ff', borderRadius: 6 },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#ffaa00', borderRadius: 6 },
  ];
  pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  pieChartData = [{ data: [300, 500, 100], backgroundColor: ['#3366ff', '#00d68f', '#ffaa00'] }];
  radarLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  radarChartData = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A', borderColor: '#3366ff', backgroundColor: 'rgba(51,102,255,0.15)', pointBackgroundColor: '#3366ff' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B', borderColor: '#ff3d71', backgroundColor: 'rgba(255,61,113,0.15)', pointBackgroundColor: '#ff3d71' },
  ];
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: { legend: { labels: { color: '#8f9bb3', font: { family: 'Inter' } } } },
    scales: { 'x': { ticks: { color: '#8f9bb3' }, grid: { color: '#edf1f7' } }, 'y': { ticks: { color: '#8f9bb3' }, grid: { color: '#edf1f7' } } },
  };
}
