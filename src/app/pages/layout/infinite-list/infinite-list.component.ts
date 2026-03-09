import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ngx-infinite-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Infinite List</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="scroll-container">
          <mat-list>
            <mat-list-item *ngFor="let item of items">{{ item }}</mat-list-item>
          </mat-list>
        </div>
        <button mat-flat-button color="primary" (click)="loadMore()">Load More</button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.scroll-container{max-height:400px;overflow-y:auto;border:1px solid #edf1f7;border-radius:4px;margin-bottom:16px}`],
})
export class InfiniteListComponent {
  items: string[] = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  loadMore() {
    const len = this.items.length;
    this.items = [...this.items, ...Array.from({ length: 10 }, (_, i) => `Item ${len + i + 1}`)];
  }
}
