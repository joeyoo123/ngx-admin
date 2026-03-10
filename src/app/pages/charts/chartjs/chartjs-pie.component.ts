import { Component, OnDestroy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ThemeService } from '../../../core/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-chartjs-pie',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <canvas baseChart
      [type]="'pie'"
      [data]="data"
      [options]="options">
    </canvas>
  `,
})
export class ChartjsPieComponent implements OnDestroy {
  data: any = {};
  options: any = {};
  themeSubscription: Subscription;

  constructor(private theme: ThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
        datasets: [{
          data: [300, 500, 100],
          backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
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
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
