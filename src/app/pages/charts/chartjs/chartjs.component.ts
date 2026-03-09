import { Component } from '@angular/core';
import { ChartjsPieComponent } from './chartjs-pie.component';
import { ChartjsBarComponent } from './chartjs-bar.component';
import { ChartjsLineComponent } from './chartjs-line.component';
import { ChartjsMultipleXaxisComponent } from './chartjs-multiple-xaxis.component';
import { ChartjsBarHorizontalComponent } from './chartjs-bar-horizontal.component';
import { ChartjsRadarComponent } from './chartjs-radar.component';

@Component({
  selector: 'ngx-chartjs',
  standalone: true,
  imports: [
    ChartjsPieComponent,
    ChartjsBarComponent,
    ChartjsLineComponent,
    ChartjsMultipleXaxisComponent,
    ChartjsBarHorizontalComponent,
    ChartjsRadarComponent,
  ],
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
})
export class ChartjsComponent {}
