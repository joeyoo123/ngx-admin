import { Component, OnDestroy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ThemeService } from '../../../core/theme.service';
import { ColorHelper } from '../../../core/color-helper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-chartjs-radar',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <canvas baseChart
      [type]="'radar'"
      [data]="data"
      [options]="options">
    </canvas>
  `,
})
export class ChartjsRadarComponent implements OnDestroy {
  options: any = {};
  data: any = {};
  themeSubscription: Subscription;

  constructor(private theme: ThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
          data: [65, 59, 90, 81, 56, 55, 40],
          label: 'Series A',
          borderColor: colors.danger,
          backgroundColor: ColorHelper.hexToRgbA(colors.dangerLight, 0.5),
          tension: 0.4,
        }, {
          data: [28, 48, 40, 19, 96, 27, 100],
          label: 'Series B',
          borderColor: colors.warning,
          backgroundColor: ColorHelper.hexToRgbA(colors.warningLight, 0.5),
          tension: 0.4,
        }],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: chartjs.textColor,
            },
          },
        },
        scales: {
          r: {
            pointLabels: {
              font: { size: 14 },
              color: chartjs.textColor,
            },
            grid: {
              color: chartjs.axisLineColor,
            },
            angleLines: {
              color: chartjs.axisLineColor,
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
