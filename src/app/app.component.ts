import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyticsService } from './core/utils/analytics.service';
import { SeoService } from './core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
  ) {}

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
