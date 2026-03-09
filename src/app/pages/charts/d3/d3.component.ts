import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'ngx-d3',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgxEchartsDirective],
  template: `
    <div class="row">
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Bar Chart</mat-card-title></mat-card-header>
        <mat-card-content><div echarts [options]="barChart" class="echart"></div></mat-card-content>
      </mat-card>
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Pie Chart</mat-card-title></mat-card-header>
        <mat-card-content><div echarts [options]="pieChart" class="echart"></div></mat-card-content>
      </mat-card>
    </div>
    <div class="row">
      <mat-card class="chart-card full">
        <mat-card-header><mat-card-title>Line Chart</mat-card-title></mat-card-header>
        <mat-card-content><div echarts [options]="lineChart" class="echart"></div></mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`.row{display:flex;gap:20px;margin-bottom:20px;flex-wrap:wrap}.chart-card{flex:1;min-width:380px}.chart-card.full{flex:1 1 100%}.echart{height:360px}`],
})
export class D3Component {
  barChart: EChartsOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: 48, right: 24, top: 24, bottom: 32 },
    xAxis: { type: 'category', data: ['Germany', 'USA', 'France', 'UK', 'Italy', 'Spain'], axisLine: { lineStyle: { color: '#e4e9f2' } }, axisLabel: { color: '#8f9bb3' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#edf1f7' } }, axisLabel: { color: '#8f9bb3' } },
    series: [
      { type: 'bar', data: [420, 380, 310, 270, 240, 200], itemStyle: { color: '#3366ff', borderRadius: [6, 6, 0, 0] }, barWidth: '45%' },
    ],
  };

  pieChart: EChartsOption = {
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: { bottom: 8, textStyle: { color: '#8f9bb3' } },
    series: [{
      type: 'pie', radius: ['35%', '60%'], center: ['50%', '45%'],
      label: { color: '#8f9bb3' },
      data: [
        { value: 335, name: 'Direct', itemStyle: { color: '#3366ff' } },
        { value: 234, name: 'Email', itemStyle: { color: '#00d68f' } },
        { value: 154, name: 'Social', itemStyle: { color: '#ffaa00' } },
        { value: 135, name: 'Video', itemStyle: { color: '#ff3d71' } },
        { value: 105, name: 'Search', itemStyle: { color: '#598bff' } },
      ],
    }],
  };

  lineChart: EChartsOption = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['Downloads', 'Uploads'], bottom: 0, textStyle: { color: '#8f9bb3' } },
    grid: { left: 48, right: 24, top: 24, bottom: 40 },
    xAxis: { type: 'category', boundaryGap: false, data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], axisLine: { lineStyle: { color: '#e4e9f2' } }, axisLabel: { color: '#8f9bb3' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#edf1f7' } }, axisLabel: { color: '#8f9bb3' } },
    series: [
      { name: 'Downloads', type: 'line', smooth: true, data: [150, 230, 224, 218, 335, 447, 410, 392, 480, 520, 590, 620], lineStyle: { width: 3 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(51,102,255,0.2)' }, { offset: 1, color: 'rgba(51,102,255,0.01)' }] } as never }, itemStyle: { color: '#3366ff' } },
      { name: 'Uploads', type: 'line', smooth: true, data: [80, 120, 140, 160, 180, 220, 250, 280, 310, 340, 370, 410], lineStyle: { width: 3 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,214,143,0.2)' }, { offset: 1, color: 'rgba(0,214,143,0.01)' }] } as never }, itemStyle: { color: '#00d68f' } },
    ],
  };
}
