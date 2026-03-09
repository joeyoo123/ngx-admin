import { Component } from '@angular/core';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  standalone: false,
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  columns = [
    { key: 'id', title: 'ID' },
    { key: 'firstName', title: 'First Name' },
    { key: 'lastName', title: 'Last Name' },
    { key: 'username', title: 'Username' },
    { key: 'email', title: 'E-mail' },
    { key: 'age', title: 'Age' },
  ];

  data: any[] = [];

  constructor(private service: SmartTableData) {
    this.data = this.service.getData();
  }

  onDeleteConfirm(index: number): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.data.splice(index, 1);
      this.data = [...this.data];
    }
  }
}
