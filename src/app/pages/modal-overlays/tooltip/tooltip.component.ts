import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'ngx-tooltip-demo',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTooltipModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Tooltip</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="btn-row">
          <button mat-raised-button matTooltip="Tooltip above" matTooltipPosition="above">Above</button>
          <button mat-raised-button matTooltip="Tooltip below" matTooltipPosition="below">Below</button>
          <button mat-raised-button matTooltip="Tooltip left" matTooltipPosition="left">Left</button>
          <button mat-raised-button matTooltip="Tooltip right" matTooltipPosition="right">Right</button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.btn-row{display:flex;gap:16px;flex-wrap:wrap}`],
})
export class TooltipDemoComponent {}
