import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'ngx-e-commerce',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTabsModule, NgxEchartsDirective],
  template: `
    <div class="stat-row">
      <mat-card *ngFor="let card of profitCards" class="stat-card" [ngClass]="card.type">
        <mat-card-content>
          <div class="stat-body">
            <div class="stat-icon-wrap" [ngClass]="card.type">
              <mat-icon>{{ card.icon }}</mat-icon>
            </div>
            <div class="stat-info">
              <span class="stat-value">{{ card.value }}</span>
              <span class="stat-label">{{ card.title }}</span>
            </div>
            <div class="stat-trend" [ngClass]="card.trendDir">
              <mat-icon>{{ card.trendDir === 'up' ? 'trending_up' : 'trending_down' }}</mat-icon>
              <span>{{ card.trend }}</span>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="revenue-card">
        <mat-card-header>
          <mat-card-title>Revenue</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div echarts [options]="revenueChart" class="echart-lg"></div>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="half-card">
        <mat-card-header><mat-card-title>Visitors Analytics</mat-card-title></mat-card-header>
        <mat-card-content>
          <div echarts [options]="visitorsChart" class="echart-md"></div>
        </mat-card-content>
      </mat-card>
      <mat-card class="half-card">
        <mat-card-header><mat-card-title>User Activity</mat-card-title></mat-card-header>
        <mat-card-content>
          <div echarts [options]="activityChart" class="echart-md"></div>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="half-card">
        <mat-card-header><mat-card-title>Country Orders</mat-card-title></mat-card-header>
        <mat-card-content>
          <div echarts [options]="countryChart" class="echart-md"></div>
        </mat-card-content>
      </mat-card>
      <mat-card class="half-card earning-card">
        <mat-card-content>
          <div class="earning-body">
            <div class="earning-chart-wrap">
              <div echarts [options]="earningChart" class="echart-earning"></div>
            </div>
            <div class="earning-info">
              <div class="earning-value">\$74,432</div>
              <div class="earning-label">Total Earnings</div>
              <div class="earning-delta up"><mat-icon>trending_up</mat-icon> 21.8% vs last month</div>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .stat-row { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin-bottom:24px; }
    .stat-card { border-left: 3px solid transparent !important; }
    .stat-card.primary { border-left-color: #3366ff !important; }
    .stat-card.success { border-left-color: #00d68f !important; }
    .stat-card.warning { border-left-color: #ffaa00 !important; }
    .stat-card.danger { border-left-color: #ff3d71 !important; }
    .stat-body { display:flex; align-items:center; gap:14px; }
    .stat-icon-wrap {
      width:44px; height:44px; border-radius:12px; display:flex; align-items:center;
      justify-content:center; color:#fff; flex-shrink:0;
    }
    .stat-icon-wrap.primary { background: linear-gradient(135deg,#3366ff,#598bff); }
    .stat-icon-wrap.success { background: linear-gradient(135deg,#00d68f,#2ce69b); }
    .stat-icon-wrap.warning { background: linear-gradient(135deg,#ffaa00,#ffc94d); }
    .stat-icon-wrap.danger { background: linear-gradient(135deg,#ff3d71,#ff708d); }
    .stat-icon-wrap mat-icon { font-size:22px; width:22px; height:22px; }
    .stat-info { flex:1; display:flex; flex-direction:column; }
    .stat-value { font-size:1.4rem; font-weight:700; letter-spacing:-0.02em; line-height:1.2; }
    .stat-label { font-size:0.78rem; color:var(--text-secondary); margin-top:2px; }
    .stat-trend { display:flex; align-items:center; gap:2px; font-size:0.75rem; font-weight:600; }
    .stat-trend.up { color:#00d68f; }
    .stat-trend.down { color:#ff3d71; }
    .stat-trend mat-icon { font-size:16px; width:16px; height:16px; }
    .row { display:flex; gap:20px; margin-bottom:20px; flex-wrap:wrap; }
    .revenue-card { flex:1 1 100%; }
    .half-card { flex:1; min-width:320px; }
    .echart-lg { height:320px; }
    .echart-md { height:280px; }
    .echart-earning { height:160px; width:160px; }
    .earning-card {}
    .earning-body { display:flex; align-items:center; gap:24px; padding:12px 0; }
    .earning-chart-wrap { flex-shrink:0; }
    .earning-info { flex:1; }
    .earning-value { font-size:2.2rem; font-weight:800; color:var(--accent); letter-spacing:-0.03em; }
    .earning-label { color:var(--text-secondary); margin-top:4px; font-size:0.85rem; }
    .earning-delta { display:flex; align-items:center; gap:4px; margin-top:8px; font-size:0.8rem; font-weight:600; }
    .earning-delta.up { color:#00d68f; }
    .earning-delta mat-icon { font-size:16px; width:16px; height:16px; }
    @media(max-width:900px) { .stat-row { grid-template-columns:repeat(2,1fr); } }
    @media(max-width:600px) { .stat-row { grid-template-columns:1fr; } .row { flex-direction:column; } }
  `],
})
export class ECommerceComponent {
  profitCards = [
    { title: 'New Orders', value: '5,765', icon: 'shopping_bag', type: 'primary', trend: '+12.5%', trendDir: 'up' },
    { title: 'Profit', value: '\$4,920', icon: 'trending_up', type: 'success', trend: '+8.2%', trendDir: 'up' },
    { title: 'New Customers', value: '863', icon: 'person_add', type: 'warning', trend: '-2.1%', trendDir: 'down' },
    { title: 'Active Users', value: '1,247', icon: 'group', type: 'danger', trend: '+15.4%', trendDir: 'up' },
  ];

  revenueChart: EChartsOption = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['Revenue', 'Expenses'], bottom: 0, textStyle: { color: '#8f9bb3' } },
    grid: { left: 48, right: 24, top: 20, bottom: 40 },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], axisLine: { lineStyle: { color: '#e4e9f2' } }, axisLabel: { color: '#8f9bb3' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#edf1f7' } }, axisLabel: { color: '#8f9bb3' } },
    series: [
      { name: 'Revenue', type: 'line', smooth: true, data: [18200, 23100, 26400, 31500, 35800, 33200, 39500, 42100, 38700, 45200, 48600, 52300], lineStyle: { width: 3 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(51,102,255,0.25)' }, { offset: 1, color: 'rgba(51,102,255,0.02)' }] } as never }, itemStyle: { color: '#3366ff' } },
      { name: 'Expenses', type: 'line', smooth: true, data: [12100, 14200, 16800, 18500, 21200, 20100, 23400, 25100, 22300, 27100, 29800, 31400], lineStyle: { width: 3 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,170,0,0.2)' }, { offset: 1, color: 'rgba(255,170,0,0.02)' }] } as never }, itemStyle: { color: '#ffaa00' } },
    ],
  };

  visitorsChart: EChartsOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: 40, right: 16, top: 16, bottom: 32 },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], axisLine: { lineStyle: { color: '#e4e9f2' } }, axisLabel: { color: '#8f9bb3' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#edf1f7' } }, axisLabel: { color: '#8f9bb3' } },
    series: [
      { type: 'bar', data: [420, 380, 510, 480, 600, 780, 650], itemStyle: { color: '#3366ff', borderRadius: [4, 4, 0, 0] }, barWidth: '50%' },
    ],
  };

  activityChart: EChartsOption = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['Page Views', 'Sessions'], bottom: 0, textStyle: { color: '#8f9bb3' } },
    grid: { left: 40, right: 16, top: 16, bottom: 40 },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], axisLine: { lineStyle: { color: '#e4e9f2' } }, axisLabel: { color: '#8f9bb3' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#edf1f7' } }, axisLabel: { color: '#8f9bb3' } },
    series: [
      { name: 'Page Views', type: 'bar', data: [1200, 980, 1340, 1100, 1450, 1680, 1320], itemStyle: { color: '#598bff', borderRadius: [4, 4, 0, 0] }, barGap: '10%' },
      { name: 'Sessions', type: 'bar', data: [400, 320, 440, 380, 520, 620, 480], itemStyle: { color: '#ff3d71', borderRadius: [4, 4, 0, 0] } },
    ],
  };

  countryChart: EChartsOption = {
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: { bottom: 0, textStyle: { color: '#8f9bb3' } },
    series: [{
      type: 'pie', radius: ['40%', '65%'], center: ['50%', '45%'],
      label: { show: false },
      data: [
        { value: 3200, name: 'USA', itemStyle: { color: '#3366ff' } },
        { value: 1800, name: 'Germany', itemStyle: { color: '#598bff' } },
        { value: 1200, name: 'France', itemStyle: { color: '#00d68f' } },
        { value: 900, name: 'Japan', itemStyle: { color: '#ffaa00' } },
        { value: 600, name: 'Australia', itemStyle: { color: '#ff3d71' } },
      ],
    }],
  };

  earningChart: EChartsOption = {
    series: [{
      type: 'pie', radius: ['65%', '85%'], center: ['50%', '50%'],
      label: { show: true, position: 'center', fontSize: 20, fontWeight: 'bold', formatter: '75%', color: '#3366ff' },
      data: [
        { value: 75, itemStyle: { color: '#3366ff' } },
        { value: 25, itemStyle: { color: '#edf1f7' } },
      ],
      silent: true,
    }],
  };
}
