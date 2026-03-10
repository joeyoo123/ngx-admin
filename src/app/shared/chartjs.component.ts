import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { NgModule } from '@angular/core';

declare var Chart: any;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'chart',
  template: '<canvas #chartCanvas></canvas>',
  styles: [':host { display: block; width: 100%; height: 100%; } canvas { width: 100% !important; height: 100% !important; }'],
})
export class ChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() type: string;
  @Input() data: any;
  @Input() options: any;

  @ViewChild('chartCanvas', { static: true }) chartCanvas: ElementRef;

  chart: any;

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
    if (this.chartCanvas && this.type) {
      this.chart = new Chart(this.chartCanvas.nativeElement, {
        type: this.type,
        data: this.data || {},
        options: this.options || {},
      });
    }
  }
}

@NgModule({
  declarations: [ChartComponent],
  exports: [ChartComponent],
})
export class ChartModule {}
