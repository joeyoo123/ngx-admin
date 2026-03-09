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
  styles: [`.row{display:flex;gap:20px;margin-bottom:20px;flex-wrap:wrap}.chart-card{flex:1;min-width:380px}.echart{height:380px}`],
})
export class EchartsComponent {
  lineOptions: EChartsOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: 48, right: 24, top: 24, bottom: 32 },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], axisLine: { lineStyle: { color: '#e4e9f2' } }, axisLabel: { color: '#8f9bb3' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#edf1f7' } }, axisLabel: { color: '#8f9bb3' } },
    series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line', smooth: true, lineStyle: { width: 3 }, itemStyle: { color: '#3366ff' }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(51,102,255,0.2)' }, { offset: 1, color: 'rgba(51,102,255,0.01)' }] } as never } }],
  };
  barOptions: EChartsOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: 48, right: 24, top: 24, bottom: 32 },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], axisLine: { lineStyle: { color: '#e4e9f2' } }, axisLabel: { color: '#8f9bb3' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#edf1f7' } }, axisLabel: { color: '#8f9bb3' } },
    series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar', itemStyle: { color: '#3366ff', borderRadius: [6, 6, 0, 0] }, barWidth: '50%' }],
  };
  pieOptions: EChartsOption = {
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: { bottom: 8, textStyle: { color: '#8f9bb3' } },
    series: [{ type: 'pie', radius: ['35%', '60%'], center: ['50%', '45%'], label: { show: false }, data: [{ value: 1048, name: 'Search', itemStyle: { color: '#3366ff' } }, { value: 735, name: 'Direct', itemStyle: { color: '#598bff' } }, { value: 580, name: 'Email', itemStyle: { color: '#00d68f' } }, { value: 484, name: 'Union', itemStyle: { color: '#ffaa00' } }, { value: 300, name: 'Video', itemStyle: { color: '#ff3d71' } }] }],
  };
  areaOptions: EChartsOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: 48, right: 24, top: 24, bottom: 32 },
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], axisLine: { lineStyle: { color: '#e4e9f2' } }, axisLabel: { color: '#8f9bb3' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#edf1f7' } }, axisLabel: { color: '#8f9bb3' } },
    series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line', smooth: true, lineStyle: { width: 3 }, itemStyle: { color: '#00d68f' }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,214,143,0.25)' }, { offset: 1, color: 'rgba(0,214,143,0.01)' }] } as never } }],
  };
}
