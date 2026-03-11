import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

declare const Chart: any;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'chart',
  template: '<canvas #canvas></canvas>',
  styles: [':host { display: block; }'],
})
export class ChartComponent implements OnInit, OnChanges, OnDestroy {
  chart: any;

  @Input() type: string;
  @Input() data: any;
  @Input() options: any;

  @Output() clickCanvas = new EventEmitter();
  @Output() clickDataset = new EventEmitter();
  @Output() clickElements = new EventEmitter();
  @Output() clickElement = new EventEmitter();

  @ViewChild('canvas', { static: true }) private canvas: ElementRef;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.create();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart) {
      if (changes.data) {
        const currentValue = changes.data.currentValue;
        ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(property => {
          this.chart.data[property] = currentValue[property];
        });
        this.chart.update();
      }
      if (changes.options) {
        this.chart.options = { ...this.chart.options, ...changes.options.currentValue };
        this.chart.update();
      }
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private create() {
    this.ngZone.runOutsideAngular(() => {
      this.chart = new Chart(this.canvas.nativeElement, {
        type: this.type,
        data: this.data,
        options: this.options,
      });
    });

    this.canvas.nativeElement.onclick = (evt: any) => {
      this.ngZone.run(() => {
        if (this.chart) {
          this.clickCanvas.emit(evt);
          const elements = this.chart.getElementsAtEvent(evt);
          const datasets = this.chart.getDatasetAtEvent(evt);

          if (elements && elements.length) {
            this.clickElements.emit(elements);
            this.clickElement.emit(elements[0]);
          }
          if (datasets && datasets.length) {
            this.clickDataset.emit(datasets);
          }
        }
      });
    };
  }
}
