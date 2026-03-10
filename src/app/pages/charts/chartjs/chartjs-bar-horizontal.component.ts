import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  standalone: false,
  selector: 'ngx-chartjs-bar-horizontal',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarHorizontalComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: colors.infoLight,
            borderWidth: 1,
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          }, {
            label: 'Dataset 2',
            backgroundColor: colors.successLight,
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          },
        ],
      };

      this.options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
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
              display: false,
              color: chartjs.axisLineColor,
            },
            ticks: {
              color: chartjs.textColor,
            },
          },
        },
        plugins: {
          legend: {
            position: 'right',
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

  private random() {
    return Math.round(Math.random() * 100);
  }
}
