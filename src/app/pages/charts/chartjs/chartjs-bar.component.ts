import { Component, OnDestroy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ThemeService } from '../../../core/theme.service';
import { ColorHelper } from '../../../core/color-helper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-chartjs-bar',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <canvas baseChart
      [type]="'bar'"
      [data]="data"
      [options]="options">
    </canvas>
  `,
})
export class ChartjsBarComponent implements OnDestroy {
  data: any = {};
  options: any = {};
  themeSubscription: Subscription;

  constructor(private theme: ThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: ColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: ColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: chartjs.textColor,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
              color: chartjs.axisLineColor,
            },
            ticks: {
              color: chartjs.textColor,
            },
          },
          y: {
            grid: {
              display: true,
              color: chartjs.axisLineColor,
            },
            ticks: {
              color: chartjs.textColor,
            },
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
