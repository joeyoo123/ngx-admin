# Angular Version Upgrade Process for ngx-admin

## Overview
This skill covers upgrading the ngx-admin Angular app one major version at a time. The app uses Nebular UI, echarts, Chart.js, Leaflet maps, and smart tables.

## Upgrade Order
Always upgrade dependencies in this order to minimize conflicts:

1. **Core Angular packages** (`@angular/core`, `@angular/common`, `@angular/compiler`, etc.) — all must be at the same version
2. **Angular CLI** (`@angular-devkit/build-angular`, `@angular/cli`)
3. **TypeScript** — check Angular's compatibility matrix for the required version
4. **zone.js** — version must match Angular's peer dependency
5. **RxJS** — upgrade if the new Angular version requires it
6. **Nebular** (`@nebular/*`) — check which version supports the target Angular version
7. **Ecosystem libraries** (ngx-echarts, ngx-leaflet, ngx-charts, smart-table, etc.)

## Dependency Installation
Always use `npm install --legacy-peer-deps` for this repo. The ecosystem libraries have peer dependency mismatches that require this flag.

## Common Breaking Changes by Version

### Angular 16
- **ngcc removed**: Delete the `ngcc` postinstall script from package.json. Any library not compiled for Ivy will fail at runtime.
- **zone.js paths changed**: Import paths changed from `zone.js/dist/*` to `zone.js/plugins/*`. Update `src/test.ts` and `polyfills.ts` accordingly.
- **TypeScript 5.1.x required**: Upgrade from 4.9.x to 5.1.x.
- **RxJS 7.x recommended**: If upgrading from RxJS 6, `Subject.next()` requires an explicit value parameter (no more implicit `undefined`).
- **node-sass removed**: Replace `node-sass` with `sass` (Dart Sass) in devDependencies.

## Ivy Compatibility Issues
Angular 16+ requires all libraries to be Ivy-compiled. Libraries that only support View Engine will cause runtime errors. Known problematic libraries in this repo:

| Original Library | Issue | Replacement | Notes |
|---|---|---|---|
| `ng2-smart-table` ^1.6.0 | Not Ivy-compatible, unmaintained | `angular2-smart-table` ^3.0.0 | Drop-in replacement; change selector from `ng2-smart-table` to `angular2-smart-table` in HTML templates and update module imports |
| `angular2-chartjs` | Not Ivy-compatible, unmaintained | Local `ChartComponent` | Create a wrapper component in `src/app/@theme/components/chartjs/` that uses Chart.js directly. Keep selector as `chart` for backward compatibility (add eslint-disable comment for selector prefix rule) |
| `@swimlane/ngx-charts` ^14.0.0 | Not Ivy-compatible | `@swimlane/ngx-charts` ^20.5.0+ | Major version jump required; API is mostly compatible |

## Echarts Migration Pattern
When upgrading echarts/ngx-echarts:

1. Update `NgxEchartsModule` imports to use `forRoot()` with dynamic import:
   ```typescript
   NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
   ```
2. Replace UMD global references in all component files:
   ```typescript
   // Before (UMD global)
   declare const echarts: any;
   
   // After (ES6 module)
   import * as echarts from 'echarts';
   ```
3. Files that typically need this change are in:
   - `src/app/pages/dashboard/` (electricity-chart, traffic-chart, solar)
   - `src/app/pages/e-commerce/` (earning, orders, profit, visitors, country-orders, traffic-bar, stats-area)
4. Add `chart.js`, `lodash-es`, and `rfdc` to `allowedCommonJsDependencies` in `angular.json` if needed.

## Leaflet Module Update
In newer versions of `@asymmetrik/ngx-leaflet`, `LeafletModule.forRoot()` is deprecated. Use just `LeafletModule` in module imports.

## Configuration Changes
- **tsconfig.json**: May need `"skipLibCheck": true` to suppress third-party type errors (e.g., `@types/ws` conflicts)
- **angular.json**: Check the test configuration for correct asset paths (e.g., font-awesome path may change between `font-awesome` and `@fortawesome/fontawesome-free`)
- **karma.conf.js**: Add `ChromeHeadlessNoSandbox` custom launcher for CI/dev environments:
  ```javascript
  customLaunchers: {
    ChromeHeadlessNoSandbox: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox']
    }
  }
  ```

## Pre-push Hooks
This repo has eslint pre-push hooks. Key rules:
- Component selectors must start with `ngx-` prefix. Use `// eslint-disable-next-line @angular-eslint/component-selector` for exceptions (e.g., the `chart` selector for backward compatibility).
- Always run `npx ng build` before pushing to catch build errors early.

## Validation Checklist
After each upgrade step:
1. `npm install --legacy-peer-deps` — resolve dependency conflicts
2. `npx ng build` — must complete with only warnings, no errors
3. `npx ng serve --port 4200` — verify app loads and responds with HTTP 200
4. `ng test --watch=false` — verify test bundle compiles (Chrome may not be available in all environments)
5. `npm audit` — document remaining vulnerabilities (transitive build-tool deps may not be fixable without breaking changes)
6. Check browser console for errors on key pages (Dashboard, IoT Dashboard, Charts, Tables)

## npm audit Notes
Many vulnerabilities in this repo are in transitive dependencies of build tools (webpack, protractor, xml2js). These typically cannot be fixed without major breaking changes to the build toolchain. Document them in the PR but don't block on them unless they're in runtime dependencies.

## Branch Naming
Use format: `devin/{timestamp}-angular-{version}-upgrade` (e.g., `devin/1773100679-angular-16-upgrade`)

## Commit Messages
Use: `chore: upgrade Angular {from} → {to}` as the primary commit message. Follow up with fix commits as needed.
