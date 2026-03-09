import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './pages/miscellaneous/not-found.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      {
        path: 'charts',
        loadChildren: () => import('./pages/charts/charts.routes').then(m => m.chartsRoutes),
      },
      { path: '', redirectTo: 'charts/echarts', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];
