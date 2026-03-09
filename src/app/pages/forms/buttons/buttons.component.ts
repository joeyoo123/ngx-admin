import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ngx-buttons',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Buttons</mat-card-title></mat-card-header>
      <mat-card-content>
        <h3>Basic Buttons</h3>
        <div class="btn-group">
          <button mat-button>Basic</button>
          <button mat-raised-button>Raised</button>
          <button mat-flat-button>Flat</button>
          <button mat-stroked-button>Stroked</button>
          <button mat-icon-button><mat-icon>favorite</mat-icon></button>
          <button mat-fab><mat-icon>add</mat-icon></button>
          <button mat-mini-fab><mat-icon>edit</mat-icon></button>
        </div>
        <h3>Colored Buttons</h3>
        <div class="btn-group">
          <button mat-raised-button color="primary">Primary</button>
          <button mat-raised-button color="accent">Accent</button>
          <button mat-raised-button color="warn">Warn</button>
          <button mat-raised-button disabled>Disabled</button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.btn-group{display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px}`],
})
export class ButtonsComponent {}
