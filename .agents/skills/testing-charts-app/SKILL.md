# Testing the Angular 19 Charts App

## Overview
This project is an Angular 19 migration of the Charts section from the original ngx-admin (Nebular-based). It uses Bootstrap for layout and three chart libraries: ECharts, Chart.js, and D3/ngx-charts.

## Local Development Setup

### Install Dependencies
```bash
npm install --legacy-peer-deps
```
`--legacy-peer-deps` is required because `ng2-charts@6` has peer dependency conflicts with Angular 19. This is expected and safe.

### Start Dev Server
```bash
ng serve --host 0.0.0.0 --port 4200
```
The Angular CLI may prompt for analytics/autocompletion on first run — answer "N" to both.

### Production Build
```bash
ng build --configuration production
```
Expected initial bundle size is ~2.25MB. Budgets are set to 2MB warning / 5MB error.

## Testing Workflow

### Routes to Test
- `/pages/charts/echarts` — 7 ECharts components (Pie, Bar, Line, Multiple x-axis, Area Stack, Bar Animation, Radar)
- `/pages/charts/chartjs` — 6 Chart.js components (Pie, Bar, Line, Multiple x-axis, Bar Horizontal, Radar)
- `/pages/charts/d3` — 5 D3/ngx-charts components (Pie, Bar, Line, Advanced Pie, Area Chart)

Navigating to `http://localhost:4200` auto-redirects to `/pages/charts/echarts`.

### What to Verify
1. **Layout**: Dark sidebar on left with "Charts" menu expanded, header with "NGX-ADMIN" at top, white content area
2. **Charts render with data**: Each card should contain a visible chart with data — not blank canvases
3. **Sidebar navigation**: Clicking Echarts/Charts.js/D3 links routes correctly with active highlighting
4. **Console errors**: Only expected warnings are benign `strokeDashoffset` animation warnings from ngx-charts (not errors)

### Key Dependencies & Versions
- `@angular/animations@19` and `@angular/cdk@19` must match Angular 19 core — they may default to v21+ if installed without version pinning
- `echarts@^5` + `ngx-echarts@^18` (uses `NgxEchartsDirective` + `provideEcharts()`)
- `chart.js@^4` + `ng2-charts@^6` (uses `BaseChartDirective` + `provideCharts()`)
- `@swimlane/ngx-charts@^20` (requires `@angular/animations`)

### Common Issues
- If charts don't render, check that `provideAnimations()` and `provideCharts(withDefaultRegisterables())` are in `app.config.ts`
- If ECharts show blank, verify `provideEcharts()` is in the component providers
- `@angular/animations` must be installed separately — it's required by `@swimlane/ngx-charts`
- Version mismatches between `@angular/*` packages cause `DOCUMENT` import errors — ensure all Angular packages are on the same major version

## Devin Secrets Needed
None — this is a frontend-only app with no authentication required.
