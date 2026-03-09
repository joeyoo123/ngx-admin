import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ngx-gmaps',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Google Maps</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="map-placeholder">
          <p>Google Maps integration. Add your API key to enable the map.</p>
          <p>Uses Angular Google Maps v19</p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.map-placeholder{height:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#f0f0f0;border-radius:4px;color:#8f9bb3}`],
})
export class GmapsComponent {}
