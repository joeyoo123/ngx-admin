import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeConfig = {
    variables: {
      primary: '#7659ff',
      success: '#00d977',
      info: '#0095ff',
      warning: '#ffa100',
      danger: '#ff386a',
      primaryLight: '#7659ff',
      infoLight: '#0095ff',
      successLight: '#00d977',
      warningLight: '#ffa100',
      dangerLight: '#ff386a',
      echarts: {
        bg: '#ffffff',
        textColor: '#484848',
        axisLineColor: '#bbbbbb',
        splitLineColor: '#ebedef',
        itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
        tooltipBackgroundColor: '#6a7985',
        areaOpacity: '0.7',
      },
      chartjs: {
        textColor: '#484848',
        axisLineColor: '#cccccc',
      },
    },
  };

  getJsTheme() {
    return new BehaviorSubject(this.themeConfig).asObservable();
  }
}
