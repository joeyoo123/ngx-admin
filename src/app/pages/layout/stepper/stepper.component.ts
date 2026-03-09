import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-stepper',
  standalone: true,
  imports: [MatCardModule, MatStepperModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Stepper</mat-card-title></mat-card-header>
      <mat-card-content>
        <mat-stepper linear>
          <mat-step label="Step 1">
            <mat-form-field appearance="outline" class="fw"><mat-label>Name</mat-label><input matInput></mat-form-field>
            <div><button mat-flat-button color="primary" matStepperNext>Next</button></div>
          </mat-step>
          <mat-step label="Step 2">
            <mat-form-field appearance="outline" class="fw"><mat-label>Address</mat-label><input matInput></mat-form-field>
            <div><button mat-button matStepperPrevious>Back</button><button mat-flat-button color="primary" matStepperNext>Next</button></div>
          </mat-step>
          <mat-step label="Step 3">
            <p>You are now done.</p>
            <div><button mat-button matStepperPrevious>Back</button><button mat-flat-button color="primary">Done</button></div>
          </mat-step>
        </mat-stepper>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.fw{width:100%}`],
})
export class StepperComponent {}
