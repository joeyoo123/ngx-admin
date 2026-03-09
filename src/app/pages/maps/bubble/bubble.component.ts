import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ngx-bubble-map',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Bubble Maps</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="map-placeholder"><p>D3-based bubble map visualization</p></div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.map-placeholder{height:400px;display:flex;align-items:center;justify-content:center;background:#f0f0f0;border-radius:4px;color:#8f9bb3}`],
})
export class BubbleMapComponent {}
