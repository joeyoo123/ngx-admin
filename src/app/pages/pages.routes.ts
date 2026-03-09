import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', loadComponent: () => import('./e-commerce/e-commerce.component').then(m => m.ECommerceComponent) },
      { path: 'iot-dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
      {
        path: 'layout',
        loadComponent: () => import('./layout/layout.component').then(m => m.LayoutPageComponent),
        children: [
          { path: 'stepper', loadComponent: () => import('./layout/stepper/stepper.component').then(m => m.StepperComponent) },
          { path: 'list', loadComponent: () => import('./layout/list/list.component').then(m => m.ListComponent) },
          { path: 'infinite-list', loadComponent: () => import('./layout/infinite-list/infinite-list.component').then(m => m.InfiniteListComponent) },
          { path: 'accordion', loadComponent: () => import('./layout/accordion/accordion.component').then(m => m.AccordionComponent) },
          { path: 'tabs', loadComponent: () => import('./layout/tabs/tabs.component').then(m => m.TabsComponent) },
        ],
      },
      {
        path: 'forms',
        loadComponent: () => import('./forms/forms.component').then(m => m.FormsPageComponent),
        children: [
          { path: 'inputs', loadComponent: () => import('./forms/form-inputs/form-inputs.component').then(m => m.FormInputsComponent) },
          { path: 'layouts', loadComponent: () => import('./forms/form-layouts/form-layouts.component').then(m => m.FormLayoutsComponent) },
          { path: 'buttons', loadComponent: () => import('./forms/buttons/buttons.component').then(m => m.ButtonsComponent) },
          { path: 'datepicker', loadComponent: () => import('./forms/datepicker/datepicker.component').then(m => m.DatepickerComponent) },
        ],
      },
      {
        path: 'ui-features',
        loadComponent: () => import('./ui-features/ui-features.component').then(m => m.UiFeaturesComponent),
        children: [
          { path: 'grid', loadComponent: () => import('./ui-features/grid/grid.component').then(m => m.GridComponent) },
          { path: 'icons', loadComponent: () => import('./ui-features/icons/icons.component').then(m => m.IconsComponent) },
          { path: 'typography', loadComponent: () => import('./ui-features/typography/typography.component').then(m => m.TypographyComponent) },
          { path: 'search-fields', loadComponent: () => import('./ui-features/search-fields/search-fields.component').then(m => m.SearchFieldsComponent) },
        ],
      },
      {
        path: 'modal-overlays',
        loadComponent: () => import('./modal-overlays/modal-overlays.component').then(m => m.ModalOverlaysComponent),
        children: [
          { path: 'dialog', loadComponent: () => import('./modal-overlays/dialog/dialog.component').then(m => m.DialogDemoComponent) },
          { path: 'window', loadComponent: () => import('./modal-overlays/window/window.component').then(m => m.WindowDemoComponent) },
          { path: 'popover', loadComponent: () => import('./modal-overlays/popover/popover.component').then(m => m.PopoverDemoComponent) },
          { path: 'toastr', loadComponent: () => import('./modal-overlays/toastr/toastr.component').then(m => m.ToastrDemoComponent) },
          { path: 'tooltip', loadComponent: () => import('./modal-overlays/tooltip/tooltip.component').then(m => m.TooltipDemoComponent) },
        ],
      },
      {
        path: 'extra-components',
        loadComponent: () => import('./extra-components/extra-components.component').then(m => m.ExtraComponentsComponent),
        children: [
          { path: 'calendar', loadComponent: () => import('./extra-components/calendar/calendar.component').then(m => m.CalendarComponent) },
          { path: 'progress-bar', loadComponent: () => import('./extra-components/progress-bar/progress-bar.component').then(m => m.ProgressBarComponent) },
          { path: 'spinner', loadComponent: () => import('./extra-components/spinner/spinner.component').then(m => m.SpinnerComponent) },
          { path: 'alert', loadComponent: () => import('./extra-components/alert/alert.component').then(m => m.AlertComponent) },
          { path: 'chat', loadComponent: () => import('./extra-components/chat/chat.component').then(m => m.ChatComponent) },
        ],
      },
      {
        path: 'maps',
        loadComponent: () => import('./maps/maps.component').then(m => m.MapsComponent),
        children: [
          { path: 'gmaps', loadComponent: () => import('./maps/gmaps/gmaps.component').then(m => m.GmapsComponent) },
          { path: 'leaflet', loadComponent: () => import('./maps/leaflet/leaflet.component').then(m => m.LeafletComponent) },
          { path: 'bubble', loadComponent: () => import('./maps/bubble/bubble.component').then(m => m.BubbleMapComponent) },
          { path: 'search-map', loadComponent: () => import('./maps/search-map/search-map.component').then(m => m.SearchMapComponent) },
        ],
      },
      {
        path: 'charts',
        loadComponent: () => import('./charts/charts.component').then(m => m.ChartsComponent),
        children: [
          { path: 'chartjs', loadComponent: () => import('./charts/chartjs/chartjs.component').then(m => m.ChartjsComponent) },
          { path: 'd3', loadComponent: () => import('./charts/d3/d3.component').then(m => m.D3Component) },
          { path: 'echarts', loadComponent: () => import('./charts/echarts/echarts.component').then(m => m.EchartsComponent) },
        ],
      },
      {
        path: 'editors',
        loadComponent: () => import('./editors/editors.component').then(m => m.EditorsComponent),
        children: [
          { path: 'tinymce', loadComponent: () => import('./editors/tinymce/tinymce.component').then(m => m.TinymceComponent) },
          { path: 'ckeditor', loadComponent: () => import('./editors/ckeditor/ckeditor.component').then(m => m.CkeditorComponent) },
        ],
      },
      {
        path: 'tables',
        loadComponent: () => import('./tables/tables.component').then(m => m.TablesComponent),
        children: [
          { path: 'smart-table', loadComponent: () => import('./tables/smart-table/smart-table.component').then(m => m.SmartTableComponent) },
          { path: 'tree-grid', loadComponent: () => import('./tables/tree-grid/tree-grid.component').then(m => m.TreeGridComponent) },
        ],
      },
      {
        path: 'miscellaneous',
        loadComponent: () => import('./miscellaneous/miscellaneous.component').then(m => m.MiscellaneousComponent),
        children: [
          { path: '404', loadComponent: () => import('./miscellaneous/not-found/not-found.component').then(m => m.NotFoundComponent) },
        ],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
