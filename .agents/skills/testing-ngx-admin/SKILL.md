# Testing ngx-admin Angular App

## Overview
ngx-admin is an Angular dashboard demo app using Nebular UI framework. It has multiple pages with charts (echarts, Chart.js, D3), tables (angular2-smart-table), maps (Leaflet, Google Maps), and various UI components.

## Local Dev Setup
1. Run `npm install --legacy-peer-deps` (needed due to peer dependency mismatches between ecosystem libraries)
2. Start dev server: `npx ng serve --port 4200`
3. Wait ~30-40s for compilation, then verify at `http://localhost:4200`
4. No authentication is required - the app is a public demo

## Key Pages to Test After Upgrades
These pages exercise the most critical components that are likely to break during Angular version upgrades:

### 1. E-commerce Dashboard (`/pages/dashboard` - default route)
- Contains echarts-based charts (earnings, orders/profit, visitors analytics, country orders, traffic bar)
- Contains a Leaflet map (country orders)
- Contains ngx-charts components (if applicable)
- This is the landing page and exercises the most components

### 2. IoT Dashboard (`/pages/iot-dashboard`)
- Electricity chart (echarts with LinearGradient)
- Traffic consumption chart (echarts)
- Solar energy pie chart (echarts)
- Temperature dragger SVG component
- Room management SVG component

### 3. Charts - Chart.js (`/pages/charts/chartjs`)
- Uses a local ChartComponent wrapper around Chart.js (replaced unmaintained angular2-chartjs)
- Should render: Pie, Bar, Line, Multiple x-axis, Bar Horizontal, Radar charts
- If charts don't render, check the ChartComponent in `src/app/@theme/components/chartjs/`

### 4. Charts - Echarts (`/pages/charts/echarts`)
- Uses NgxEchartsModule with forRoot() dynamic import
- Should render: Pie, Bar, Line, Multiple x-axis, Area Stack, Bar Animation, Radar
- If echarts don't render, check module imports use `NgxEchartsModule.forRoot({ echarts: () => import('echarts') })`

### 5. Tables - Smart Table (`/pages/tables/smart-table`)
- Uses angular2-smart-table (Ivy-compatible fork of ng2-smart-table)
- Should show a data table with columns, filter inputs, edit/delete actions, and pagination
- The component selector is `angular2-smart-table` (not `ng2-smart-table`)

## Console Warnings to Expect
- ECharts deprecation warnings about `normal` hierarchy, `clockWise`, `hoverAnimation` - these are pre-existing in the chart configuration and are warnings, not errors
- "Can't get DOM width or height" from ECharts - appears when chart containers aren't visible yet (e.g., offscreen tabs)
- CommonJS dependency warnings for eva-icons and leaflet during build
- No actual errors should appear in the console - only the above warnings

## Common Issues During Angular Upgrades
- **zone.js import paths**: Changed from `zone.js/dist/*` to `zone.js/plugins/*` in Angular 16+
- **ngcc removal**: Angular 16 removed ngcc; any library not compiled for Ivy will fail. Check for View Engine-only libraries
- **echarts imports**: Components may use `declare const echarts: any;` (UMD global) which should be `import * as echarts from 'echarts';` (ES6 module)
- **Double-bundling risk**: When migrating echarts/chart.js to ES module imports, remember to also remove the old UMD script entries from angular.json `scripts` array. Otherwise both the UMD global and ES module will be bundled (~1.16 MB extra)
- **ng2-smart-table**: The original package is unmaintained and not Ivy-compatible. Use `angular2-smart-table` as a drop-in replacement
- **angular2-chartjs**: Unmaintained and not Ivy-compatible. A local ChartComponent wrapper exists in `src/app/@theme/components/chartjs/`
- **font-awesome**: The repo uses `@fortawesome/fontawesome-free`, not the old `font-awesome` package. Check angular.json references
- **Pre-push hooks**: The repo has eslint pre-push hooks. Component selectors must start with `ngx-` prefix (or use eslint-disable comment for backward-compatible selectors like `chart`)
- **skipLibCheck**: May need `skipLibCheck: true` in tsconfig.json to suppress third-party type errors (e.g., @types/ws)

## Build & Test Commands
- Build: `npx ng build`
- Test (compile check): `ng test --watch=false --browsers=ChromeHeadlessNoSandbox` (Chrome may not be available in all environments)
- Serve: `npx ng serve --port 4200`
- Lint: Runs automatically via pre-push git hook

## Navigation Structure
The sidebar menu items map to routes defined in `src/app/pages/pages-routing.module.ts`. Menu items are defined in `src/app/pages/pages-menu.ts`. Most feature pages are lazy-loaded modules.
