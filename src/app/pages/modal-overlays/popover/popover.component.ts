import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'ngx-popover-demo',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTooltipModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Popover</mat-card-title></mat-card-header>
      <mat-card-content>
        <div class="btn-row">
          <button mat-raised-button matTooltip="Popover on top" matTooltipPosition="above">Top</button>
          <button mat-raised-button matTooltip="Popover on right" matTooltipPosition="right" data-test="no">Right</button>
          <button mat-raised-button matTooltip="Popover on bottom" matTooltipPosition="below">Bottom</button>
          <button mat-raised-button matTooltip="Popover on left" matTooltipPosition="left">Left</button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.btn-row{display:flex;gap:16px;flex-wrap:wrap}`],
})
export class PopoverDemoComponent {}
