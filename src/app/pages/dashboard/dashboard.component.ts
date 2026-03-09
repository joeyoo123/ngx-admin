import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import { Subject, takeUntil } from 'rxjs';
import { TemperatureHumidityData } from '../../core/data/temperature-humidity';
import { SolarData } from '../../core/data/solar';

interface StatusCard {
  title: string;
  icon: string;
  type: string;
  on: boolean;
}

@Component({
  selector: 'ngx-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatGridListModule, NgxEchartsDirective],
  template: `
    <div class="dashboard-grid">
      <mat-card *ngFor="let card of statusCards" class="status-card" [ngClass]="card.type" (click)="card.on = !card.on">
        <mat-card-content>
          <div class="card-body">
            <div class="icon-wrap" [ngClass]="card.type">
              <mat-icon>{{ card.icon }}</mat-icon>
            </div>
            <div class="details">
              <span class="card-title">{{ card.title }}</span>
              <span class="card-status" [class.on]="card.on">{{ card.on ? 'ON' : 'OFF' }}</span>
            </div>
            <div class="toggle-dot" [class.on]="card.on"></div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="col-card">
        <mat-card-header><mat-card-title>Temperature</mat-card-title></mat-card-header>
        <mat-card-content>
          <div class="gauge-row">
            <div class="gauge-item">
              <div echarts [options]="tempGauge" class="echart-gauge"></div>
              <div class="gauge-label">Temperature</div>
            </div>
            <div class="gauge-item">
              <div echarts [options]="humidGauge" class="echart-gauge"></div>
              <div class="gauge-label">Humidity</div>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="col-card">
        <mat-card-header><mat-card-title>Solar Energy</mat-card-title></mat-card-header>
        <mat-card-content>
          <div class="solar-body">
            <div class="solar-big">{{ solarValue }}</div>
            <div class="solar-unit">kWh</div>
            <div class="solar-sub">Energy Generated Today</div>
            <div echarts [options]="solarChart" class="echart-solar"></div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="col-card full">
        <mat-card-header><mat-card-title>Electricity Consumption</mat-card-title></mat-card-header>
        <mat-card-content>
          <div echarts [options]="electricityChart" class="echart-electricity"></div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin-bottom:24px; }
    .status-card { cursor:pointer; transition:transform 0.15s !important; }
    .status-card:active { transform:scale(0.98); }
    .card-body { display:flex; align-items:center; gap:14px; }
    .icon-wrap {
      width:44px; height:44px; border-radius:12px; display:flex;
      align-items:center; justify-content:center; color:#fff; flex-shrink:0;
    }
    .icon-wrap.warning { background:linear-gradient(135deg,#ffaa00,#ffc94d); }
    .icon-wrap.success { background:linear-gradient(135deg,#00d68f,#2ce69b); }
    .icon-wrap.danger { background:linear-gradient(135deg,#ff3d71,#ff708d); }
    .icon-wrap.info { background:linear-gradient(135deg,#0095ff,#42b0ff); }
    .icon-wrap mat-icon { font-size:22px; width:22px; height:22px; }
    .details { flex:1; display:flex; flex-direction:column; }
    .card-title { font-weight:600; font-size:0.9rem; }
    .card-status { font-size:0.78rem; color:var(--text-hint); margin-top:2px; }
    .card-status.on { color:#00d68f; font-weight:600; }
    .toggle-dot { width:10px; height:10px; border-radius:50%; background:#ccc; flex-shrink:0; }
    .toggle-dot.on { background:#00d68f; box-shadow:0 0 6px rgba(0,214,143,0.5); }
    .row { display:flex; gap:20px; margin-bottom:20px; }
    .col-card { flex:1; }
    .col-card.full { flex:1 1 100%; }
    .gauge-row { display:flex; justify-content:center; gap:24px; }
    .gauge-item { text-align:center; }
    .echart-gauge { height:180px; width:180px; }
    .gauge-label { font-size:0.8rem; color:var(--text-secondary); margin-top:-8px; }
    .solar-body { text-align:center; padding:8px 0; }
    .solar-big { font-size:2.8rem; font-weight:800; color:var(--accent); letter-spacing:-0.03em; line-height:1; }
    .solar-unit { font-size:1rem; color:var(--text-secondary); margin-top:4px; }
    .solar-sub { font-size:0.8rem; color:var(--text-hint); margin-top:4px; }
    .echart-solar { height:120px; margin-top:8px; }
    .echart-electricity { height:300px; }
    @media(max-width:900px) { .dashboard-grid { grid-template-columns:repeat(2,1fr); } }
    @media(max-width:600px) { .dashboard-grid { grid-template-columns:1fr; } .row { flex-direction:column; } }
  `],
})
export class DashboardComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  statusCards: StatusCard[] = [
    { title: 'Light', icon: 'lightbulb', type: 'warning', on: true },
    { title: 'Roller Shades', icon: 'blinds', type: 'success', on: true },
    { title: 'Wireless Audio', icon: 'speaker', type: 'danger', on: false },
    { title: 'Coffee Maker', icon: 'coffee', type: 'info', on: true },
  ];
  temperature = 24;
  humidity = 57;
  solarValue = 6.421;

  tempGauge: EChartsOption = {
    series: [{
      type: 'gauge', startAngle: 220, endAngle: -40, min: 0, max: 50,
      pointer: { show: false }, progress: { show: true, width: 14, roundCap: true, itemStyle: { color: '#3366ff' } },
      axisLine: { lineStyle: { width: 14, color: [[1, '#edf1f7']] } },
      axisTick: { show: false }, splitLine: { show: false }, axisLabel: { show: false },
      detail: { offsetCenter: [0, '10%'], fontSize: 28, fontWeight: 'bold', color: '#3366ff', formatter: '{value}°' },
      data: [{ value: 24 }],
    }],
  };

  humidGauge: EChartsOption = {
    series: [{
      type: 'gauge', startAngle: 220, endAngle: -40, min: 0, max: 100,
      pointer: { show: false }, progress: { show: true, width: 14, roundCap: true, itemStyle: { color: '#00d68f' } },
      axisLine: { lineStyle: { width: 14, color: [[1, '#edf1f7']] } },
      axisTick: { show: false }, splitLine: { show: false }, axisLabel: { show: false },
      detail: { offsetCenter: [0, '10%'], fontSize: 28, fontWeight: 'bold', color: '#00d68f', formatter: '{value}%' },
      data: [{ value: 57 }],
    }],
  };

  solarChart: EChartsOption = {
    grid: { left: 0, right: 0, top: 8, bottom: 0 },
    xAxis: { type: 'category', show: false, data: ['6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm'] },
    yAxis: { type: 'value', show: false },
    series: [{ type: 'line', smooth: true, data: [0.2, 1.1, 3.4, 5.8, 6.4, 4.2, 1.5], lineStyle: { width: 2, color: '#ffaa00' }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,170,0,0.3)' }, { offset: 1, color: 'rgba(255,170,0,0.02)' }] } as never }, itemStyle: { color: '#ffaa00' }, symbol: 'none' }],
  };

  electricityChart: EChartsOption = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['Consumption', 'Generation'], bottom: 0, textStyle: { color: '#8f9bb3' } },
    grid: { left: 48, right: 24, top: 20, bottom: 40 },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], axisLine: { lineStyle: { color: '#e4e9f2' } }, axisLabel: { color: '#8f9bb3' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#edf1f7' } }, axisLabel: { color: '#8f9bb3' } },
    series: [
      { name: 'Consumption', type: 'bar', data: [480, 420, 500, 380, 350, 560, 620, 580, 440, 420, 380, 510], itemStyle: { color: '#3366ff', borderRadius: [4, 4, 0, 0] }, barGap: '15%' },
      { name: 'Generation', type: 'bar', data: [120, 180, 260, 340, 410, 480, 520, 490, 380, 280, 160, 110], itemStyle: { color: '#00d68f', borderRadius: [4, 4, 0, 0] } },
    ],
  };

  constructor(
    private temperatureHumidityService: TemperatureHumidityData,
    private solarService: SolarData,
  ) {
    this.solarService.getSolarData().pipe(takeUntil(this.destroy$)).subscribe(v => this.solarValue = v);
    this.temperatureHumidityService.getTemperatureData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (data) {
          this.temperature = data.value;
        }
      });
  }

  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
}
