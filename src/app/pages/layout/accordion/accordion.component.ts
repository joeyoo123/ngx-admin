import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'ngx-accordion',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Accordion</mat-card-title></mat-card-header>
      <mat-card-content>
        <mat-accordion>
          <mat-expansion-panel>
            <mat-expansion-panel-header><mat-panel-title>Product Details</mat-panel-title></mat-expansion-panel-header>
            <p>A product is a thing that can be sold. It has a name, a description, and a price.</p>
          </mat-expansion-panel>
          <mat-expansion-panel>
            <mat-expansion-panel-header><mat-panel-title>Pricing</mat-panel-title></mat-expansion-panel-header>
            <p>The pricing section contains information about the cost of products and services.</p>
          </mat-expansion-panel>
          <mat-expansion-panel>
            <mat-expansion-panel-header><mat-panel-title>Delivery</mat-panel-title></mat-expansion-panel-header>
            <p>We offer free delivery on all orders over $50. Standard delivery takes 3-5 business days.</p>
          </mat-expansion-panel>
        </mat-accordion>
      </mat-card-content>
    </mat-card>
  `,
})
export class AccordionComponent {}
