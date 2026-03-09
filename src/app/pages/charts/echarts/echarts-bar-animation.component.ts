import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { ThemeService } from '../../../core/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-echarts-bar-animation',
  standalone: true,
  imports: [NgxEchartsDirective],
  providers: [provideEcharts()],
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsBarAnimationComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription!: Subscription;

  constructor(private theme: ThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const xAxisData: string[] = [];
      const data1: number[] = [];
      const data2: number[] = [];

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight, colors.infoLight],
        legend: {
          data: ['bar', 'bar2'],
          align: 'left',
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            data: xAxisData,
            silent: false,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              color: echarts.textColor,
            },
          },
        ],
        yAxis: [
          {
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              color: echarts.textColor,
            },
          },
        ],
        series: [
          {
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: (idx: number) => idx * 10,
          },
          {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: (idx: number) => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx: number) => idx * 5,
      };

      for (let i = 0; i < 100; i++) {
        xAxisData.push('Category ' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
