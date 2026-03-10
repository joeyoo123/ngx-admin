import { Component } from '@angular/core';
import { EchartsPieComponent } from './echarts-pie.component';
import { EchartsBarComponent } from './echarts-bar.component';
import { EchartsLineComponent } from './echarts-line.component';
import { EchartsMultipleXaxisComponent } from './echarts-multiple-xaxis.component';
import { EchartsAreaStackComponent } from './echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './echarts-bar-animation.component';
import { EchartsRadarComponent } from './echarts-radar.component';

@Component({
  selector: 'ngx-echarts',
  standalone: true,
  imports: [
    EchartsPieComponent,
    EchartsBarComponent,
    EchartsLineComponent,
    EchartsMultipleXaxisComponent,
    EchartsAreaStackComponent,
    EchartsBarAnimationComponent,
    EchartsRadarComponent,
  ],
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent {}
