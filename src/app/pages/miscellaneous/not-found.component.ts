import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngx-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <h2 class="title">404 Page Not Found</h2>
        <p class="description">The page you were looking for doesn't exist.</p>
        <a routerLink="/pages/charts/echarts" class="btn btn-primary btn-lg">
          Go to Charts
        </a>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 60vh;
      text-align: center;
    }
    .title {
      font-size: 2rem;
      color: #222b45;
      margin-bottom: 1rem;
    }
    .description {
      color: #8f9bb3;
      margin-bottom: 2rem;
      font-size: 1.125rem;
    }
  `],
})
export class NotFoundComponent {}
