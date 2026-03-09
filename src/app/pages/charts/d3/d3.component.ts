import { Component } from '@angular/core';
import { D3BarComponent } from './d3-bar.component';
import { D3LineComponent } from './d3-line.component';
import { D3PieComponent } from './d3-pie.component';
import { D3AreaStackComponent } from './d3-area-stack.component';
import { D3AdvancedPieComponent } from './d3-advanced-pie.component';

@Component({
  selector: 'ngx-d3',
  standalone: true,
  imports: [
    D3BarComponent,
    D3LineComponent,
    D3PieComponent,
    D3AreaStackComponent,
    D3AdvancedPieComponent,
  ],
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss'],
})
export class D3Component {}
