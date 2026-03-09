import { MenuItem } from '../theme/components/sidenav-menu/sidenav-menu.component';

export const MENU_ITEMS: MenuItem[] = [
  { title: 'E-commerce', icon: 'shopping_cart', link: '/pages/dashboard', home: true },
  { title: 'IoT Dashboard', icon: 'dashboard', link: '/pages/iot-dashboard' },
  { title: 'FEATURES', group: true },
  {
    title: 'Layout', icon: 'view_compact', children: [
      { title: 'Stepper', link: '/pages/layout/stepper' },
      { title: 'List', link: '/pages/layout/list' },
      { title: 'Infinite List', link: '/pages/layout/infinite-list' },
      { title: 'Accordion', link: '/pages/layout/accordion' },
      { title: 'Tabs', link: '/pages/layout/tabs' },
    ],
  },
  {
    title: 'Forms', icon: 'edit_note', children: [
      { title: 'Form Inputs', link: '/pages/forms/inputs' },
      { title: 'Form Layouts', link: '/pages/forms/layouts' },
      { title: 'Buttons', link: '/pages/forms/buttons' },
      { title: 'Datepicker', link: '/pages/forms/datepicker' },
    ],
  },
  {
    title: 'UI Features', icon: 'design_services', children: [
      { title: 'Grid', link: '/pages/ui-features/grid' },
      { title: 'Icons', link: '/pages/ui-features/icons' },
      { title: 'Typography', link: '/pages/ui-features/typography' },
      { title: 'Search Fields', link: '/pages/ui-features/search-fields' },
    ],
  },
  {
    title: 'Modal & Overlays', icon: 'picture_in_picture', children: [
      { title: 'Dialog', link: '/pages/modal-overlays/dialog' },
      { title: 'Window', link: '/pages/modal-overlays/window' },
      { title: 'Popover', link: '/pages/modal-overlays/popover' },
      { title: 'Toastr', link: '/pages/modal-overlays/toastr' },
      { title: 'Tooltip', link: '/pages/modal-overlays/tooltip' },
    ],
  },
  {
    title: 'Extra Components', icon: 'extension', children: [
      { title: 'Calendar', link: '/pages/extra-components/calendar' },
      { title: 'Progress Bar', link: '/pages/extra-components/progress-bar' },
      { title: 'Spinner', link: '/pages/extra-components/spinner' },
      { title: 'Alert', link: '/pages/extra-components/alert' },
      { title: 'Chat', link: '/pages/extra-components/chat' },
    ],
  },
  {
    title: 'Maps', icon: 'map', children: [
      { title: 'Google Maps', link: '/pages/maps/gmaps' },
      { title: 'Leaflet Maps', link: '/pages/maps/leaflet' },
      { title: 'Bubble Maps', link: '/pages/maps/bubble' },
      { title: 'Search Maps', link: '/pages/maps/search-map' },
    ],
  },
  {
    title: 'Charts', icon: 'bar_chart', children: [
      { title: 'Chartjs', link: '/pages/charts/chartjs' },
      { title: 'D3', link: '/pages/charts/d3' },
      { title: 'Echarts', link: '/pages/charts/echarts' },
    ],
  },
  {
    title: 'Editors', icon: 'text_fields', children: [
      { title: 'TinyMCE', link: '/pages/editors/tinymce' },
      { title: 'CKEditor', link: '/pages/editors/ckeditor' },
    ],
  },
  {
    title: 'Tables', icon: 'table_chart', children: [
      { title: 'Smart Table', link: '/pages/tables/smart-table' },
      { title: 'Tree Grid', link: '/pages/tables/tree-grid' },
    ],
  },
  { title: 'Miscellaneous', icon: 'shuffle', link: '/pages/miscellaneous/404' },
];
