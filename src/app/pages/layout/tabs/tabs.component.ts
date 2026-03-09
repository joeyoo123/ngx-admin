import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'ngx-tabs',
  standalone: true,
  imports: [MatCardModule, MatTabsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Tabs</mat-card-title></mat-card-header>
      <mat-card-content>
        <mat-tab-group>
          <mat-tab label="Tab 1"><div class="tab-content"><p>Content for tab 1. This is the first tab panel.</p></div></mat-tab>
          <mat-tab label="Tab 2"><div class="tab-content"><p>Content for tab 2. This is the second tab panel.</p></div></mat-tab>
          <mat-tab label="Tab 3"><div class="tab-content"><p>Content for tab 3. This is the third tab panel.</p></div></mat-tab>
        </mat-tab-group>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.tab-content{padding:24px}`],
})
export class TabsComponent {}
