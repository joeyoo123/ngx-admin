import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ngx-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>List</mat-card-title></mat-card-header>
      <mat-card-content>
        <mat-list>
          <mat-list-item *ngFor="let item of items">
            <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
            <span matListItemTitle>{{ item.title }}</span>
            <span matListItemLine>{{ item.description }}</span>
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
})
export class ListComponent {
  items = [
    { title: 'Item 1', description: 'Description for item 1', icon: 'home' },
    { title: 'Item 2', description: 'Description for item 2', icon: 'person' },
    { title: 'Item 3', description: 'Description for item 3', icon: 'settings' },
    { title: 'Item 4', description: 'Description for item 4', icon: 'email' },
    { title: 'Item 5', description: 'Description for item 5', icon: 'star' },
  ];
}
