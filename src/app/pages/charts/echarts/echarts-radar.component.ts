import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { ThemeService } from '../../../core/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-echarts-radar',
  standalone: true,
  imports: [NgxEchartsDirective],
  providers: [provideEcharts()],
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsRadarComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription!: Subscription;

  constructor(private theme: ThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.warning],
        tooltip: {},
        legend: {
          data: ['Allocated Budget', 'Actual Spending'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        radar: {
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 },
          ],
          splitArea: {
            areaStyle: {
              color: 'transparent',
            },
          },
          axisName: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Budget vs Spending',
            type: 'radar',
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: 'Allocated Budget',
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: 'Actual Spending',
              },
            ],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
