import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
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
  imports: [CommonModule, MatCardModule, MatIconModule, MatGridListModule],
  template: `
    <div class="dashboard-grid">
      <mat-card *ngFor="let card of statusCards" class="status-card" [class]="card.type">
        <mat-card-content>
          <div class="card-body">
            <div class="icon-container">
              <mat-icon>{{ card.icon }}</mat-icon>
            </div>
            <div class="details">
              <span class="title">{{ card.title }}</span>
              <span class="status">{{ card.on ? 'ON' : 'OFF' }}</span>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="col-card">
        <mat-card-header><mat-card-title>Temperature</mat-card-title></mat-card-header>
        <mat-card-content>
          <div class="temperature-display">
            <div class="temp-value">{{ temperature }}°</div>
            <div class="temp-label">Current Temperature</div>
          </div>
          <div class="humidity-display">
            <div class="temp-value">{{ humidity }}%</div>
            <div class="temp-label">Humidity</div>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="col-card">
        <mat-card-header><mat-card-title>Solar Energy</mat-card-title></mat-card-header>
        <mat-card-content>
          <div class="solar-display">
            <div class="solar-value">{{ solarValue }} kWh</div>
            <div class="solar-label">Energy Generated Today</div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="col-card full">
        <mat-card-header><mat-card-title>Electricity Consumption</mat-card-title></mat-card-header>
        <mat-card-content>
          <div class="chart-placeholder">
            <mat-icon class="chart-icon">show_chart</mat-icon>
            <p>Electricity consumption chart</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:16px; margin-bottom:24px; }
    .status-card { cursor:pointer; }
    .card-body { display:flex; align-items:center; gap:16px; padding:8px 0; }
    .icon-container { width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:#3366ff; color:#fff; }
    .status-card.warning .icon-container { background:#ffaa00; }
    .status-card.success .icon-container { background:#00d68f; }
    .status-card.danger .icon-container { background:#ff3d71; }
    .status-card.info .icon-container { background:#0095ff; }
    .details { display:flex; flex-direction:column; }
    .title { font-weight:600; }
    .status { font-size:0.875rem; color:#8f9bb3; }
    .row { display:flex; gap:24px; margin-bottom:24px; }
    .col-card { flex:1; }
    .col-card.full { flex:1 1 100%; }
    .temperature-display, .humidity-display, .solar-display { text-align:center; padding:24px; }
    .temp-value, .solar-value { font-size:2.5rem; font-weight:700; color:#3366ff; }
    .temp-label, .solar-label { color:#8f9bb3; margin-top:8px; }
    .chart-placeholder { text-align:center; padding:48px; color:#8f9bb3; }
    .chart-icon { font-size:48px; width:48px; height:48px; }
    @media (max-width:768px) { .row { flex-direction:column; } }
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
