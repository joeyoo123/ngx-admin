import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'ngx-e-commerce',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTabsModule],
  template: `
    <div class="row">
      <mat-card *ngFor="let card of profitCards" class="profit-card">
        <mat-card-content>
          <div class="card-body">
            <mat-icon [style.color]="card.color">{{ card.icon }}</mat-icon>
            <div class="info">
              <span class="title">{{ card.title }}</span>
              <span class="value">{{ card.value }}</span>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="chart-card">
        <mat-card-header><mat-card-title>Revenue</mat-card-title></mat-card-header>
        <mat-card-content>
          <mat-tab-group>
            <mat-tab label="Week"><div class="chart-placeholder"><p>Weekly revenue chart</p></div></mat-tab>
            <mat-tab label="Month"><div class="chart-placeholder"><p>Monthly revenue chart</p></div></mat-tab>
            <mat-tab label="Year"><div class="chart-placeholder"><p>Yearly revenue chart</p></div></mat-tab>
          </mat-tab-group>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="half-card">
        <mat-card-header><mat-card-title>Visitors Analytics</mat-card-title></mat-card-header>
        <mat-card-content>
          <div class="chart-placeholder"><mat-icon>people</mat-icon><p>Visitor analytics data</p></div>
        </mat-card-content>
      </mat-card>
      <mat-card class="half-card">
        <mat-card-header><mat-card-title>User Activity</mat-card-title></mat-card-header>
        <mat-card-content>
          <mat-tab-group>
            <mat-tab label="Month"><div class="chart-placeholder"><p>Monthly activity</p></div></mat-tab>
            <mat-tab label="Week"><div class="chart-placeholder"><p>Weekly activity</p></div></mat-tab>
            <mat-tab label="Day"><div class="chart-placeholder"><p>Daily activity</p></div></mat-tab>
          </mat-tab-group>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="row">
      <mat-card class="half-card">
        <mat-card-header><mat-card-title>Country Orders</mat-card-title></mat-card-header>
        <mat-card-content>
          <mat-tab-group>
            <mat-tab *ngFor="let tab of countryTabs" [label]="tab">
              <div class="chart-placeholder"><p>{{ tab }} orders data</p></div>
            </mat-tab>
          </mat-tab-group>
        </mat-card-content>
      </mat-card>
      <mat-card class="half-card">
        <mat-card-header><mat-card-title>Earning</mat-card-title></mat-card-header>
        <mat-card-content>
          <div class="earning-info">
            <div class="earning-value">\$74,432</div>
            <div class="earning-label">Total Earnings</div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .row{display:flex;gap:24px;margin-bottom:24px;flex-wrap:wrap}
    .profit-card{flex:1;min-width:200px}
    .card-body{display:flex;align-items:center;gap:16px;padding:8px 0}
    .card-body mat-icon{font-size:36px;width:36px;height:36px}
    .info{display:flex;flex-direction:column}
    .info .title{font-size:0.875rem;color:#8f9bb3}
    .info .value{font-size:1.5rem;font-weight:700}
    .chart-card{flex:1 1 100%}
    .half-card{flex:1;min-width:300px}
    .chart-placeholder{text-align:center;padding:48px;color:#8f9bb3}
    .chart-placeholder mat-icon{font-size:48px;width:48px;height:48px}
    .earning-info{text-align:center;padding:32px}
    .earning-value{font-size:2.5rem;font-weight:700;color:#3366ff}
    .earning-label{color:#8f9bb3;margin-top:8px}
  `],
})
export class ECommerceComponent {
  profitCards = [
    { title: 'New Orders', value: '5,765', icon: 'shopping_bag', color: '#3366ff' },
    { title: 'Profit', value: '\$4,920', icon: 'trending_up', color: '#00d68f' },
    { title: 'New Customers', value: '863', icon: 'person_add', color: '#ffaa00' },
    { title: 'Active Users', value: '1,247', icon: 'group', color: '#ff3d71' },
  ];
  countryTabs = ['USA', 'Germany', 'France', 'Japan', 'Australia'];
}
