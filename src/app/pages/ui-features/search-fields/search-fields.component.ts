import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ngx-search-fields',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Search Fields</mat-card-title></mat-card-header>
      <mat-card-content>
        <h3>Basic Search</h3>
        <mat-form-field appearance="outline" class="fw">
          <mat-label>Search</mat-label>
          <input matInput placeholder="Type to search...">
          <mat-icon matPrefix>search</mat-icon>
        </mat-form-field>
        <h3>Search with button</h3>
        <div class="search-row">
          <mat-form-field appearance="outline" class="flex-field">
            <mat-label>Search</mat-label>
            <input matInput placeholder="Type to search...">
          </mat-form-field>
          <button mat-flat-button color="primary">Search</button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.fw{width:100%}.search-row{display:flex;gap:16px;align-items:center}.flex-field{flex:1}`],
})
export class SearchFieldsComponent {}
