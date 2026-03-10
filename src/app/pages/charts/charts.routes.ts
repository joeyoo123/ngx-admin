import { Routes } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { D3Component } from './d3/d3.component';
import { ChartjsComponent } from './chartjs/chartjs.component';

export const chartsRoutes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [
    { path: 'echarts', component: EchartsComponent },
    { path: 'd3', component: D3Component },
    { path: 'chartjs', component: ChartjsComponent },
    { path: '', redirectTo: 'echarts', pathMatch: 'full' },
  ],
}];
