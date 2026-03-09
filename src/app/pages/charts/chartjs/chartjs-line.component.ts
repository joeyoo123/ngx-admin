import { Component, OnDestroy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ThemeService } from '../../../core/theme.service';
import { ColorHelper } from '../../../core/color-helper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-chartjs-line',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <canvas baseChart
      [type]="'line'"
      [data]="data"
      [options]="options">
    </canvas>
  `,
})
export class ChartjsLineComponent implements OnDestroy {
  data: any = {};
  options: any = {};
  themeSubscription: Subscription;

  constructor(private theme: ThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: ColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: ColorHelper.hexToRgbA(colors.danger, 0.3),
          borderColor: colors.danger,
        }, {
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Series C',
          backgroundColor: ColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info,
        }],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: true,
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
        plugins: {
          legend: {
            labels: {
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
