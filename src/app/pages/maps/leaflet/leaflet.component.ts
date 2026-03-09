import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ngx-leaflet-page',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Leaflet Maps</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="map-placeholder">
          <p>Leaflet map integration using ngx-leaflet</p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.map-placeholder{height:400px;display:flex;align-items:center;justify-content:center;background:#f0f0f0;border-radius:4px;color:#8f9bb3}`],
})
export class LeafletComponent {}
