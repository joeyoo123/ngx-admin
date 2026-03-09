import { Component } from '@angular/core';
import { OneColumnLayoutComponent } from '../theme/layouts/one-column/one-column.layout';

@Component({
  selector: 'ngx-pages',
  standalone: true,
  imports: [OneColumnLayoutComponent],
  template: '<ngx-one-column-layout></ngx-one-column-layout>',
})
export class PagesComponent {}
