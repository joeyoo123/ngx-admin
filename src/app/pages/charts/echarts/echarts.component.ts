import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'ngx-echarts-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgxEchartsDirective],
  template: `
    <div class="row">
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Line Chart</mat-card-title></mat-card-header>
        <mat-card-content><div echarts [options]="lineOptions" class="echart"></div></mat-card-content>
      </mat-card>
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Bar Chart</mat-card-title></mat-card-header>
        <mat-card-content><div echarts [options]="barOptions" class="echart"></div></mat-card-content>
      </mat-card>
    </div>
    <div class="row">
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Pie Chart</mat-card-title></mat-card-header>
        <mat-card-content><div echarts [options]="pieOptions" class="echart"></div></mat-card-content>
      </mat-card>
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Area Chart</mat-card-title></mat-card-header>
        <mat-card-content><div echarts [options]="areaOptions" class="echart"></div></mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`.row{display:flex;gap:24px;margin-bottom:24px;flex-wrap:wrap}.chart-card{flex:1;min-width:400px}.echart{height:400px}`],
})
export class EchartsComponent {
  lineOptions: EChartsOption = {
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line', smooth: true }],
  };
  barOptions: EChartsOption = {
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar' }],
  };
  pieOptions: EChartsOption = {
    series: [{ type: 'pie', radius: '60%', data: [{ value: 1048, name: 'Search' }, { value: 735, name: 'Direct' }, { value: 580, name: 'Email' }, { value: 484, name: 'Union' }, { value: 300, name: 'Video' }] }],
  };
  areaOptions: EChartsOption = {
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line', areaStyle: {} }],
  };
}
