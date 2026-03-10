import {
  Component,
  Input,
  ElementRef,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  ViewChild,
  SimpleChanges,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  standalone: false,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'chart',
  template: '<canvas #chartCanvas></canvas>',
  styles: [':host { display: block; }'],
})
export class ChartComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() type: string;
  @Input() data: any;
  @Input() options: any;

  @ViewChild('chartCanvas', { static: true }) chartCanvas: ElementRef;

  private chart: Chart;

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart) {
      if (changes.data) {
        this.chart.data = this.data;
      }
      if (changes.options) {
        this.chart.options = this.options;
      }
      this.chart.update();
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private createChart() {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: this.type as any,
      data: this.data,
      options: this.options,
    });
  }
}
