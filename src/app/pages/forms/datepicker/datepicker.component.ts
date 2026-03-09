import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'ngx-datepicker',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Datepicker</mat-card-title></mat-card-header>
      <mat-card-content>
        <h3>Basic Datepicker</h3>
        <mat-form-field appearance="outline">
          <mat-label>Choose a date</mat-label>
          <input matInput [matDatepicker]="picker1">
          <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
          <mat-datepicker #picker1></mat-datepicker>
        </mat-form-field>
        <h3>Date Range</h3>
        <mat-form-field appearance="outline">
          <mat-label>Enter a date range</mat-label>
          <mat-date-range-input [rangePicker]="rangePicker">
            <input matStartDate placeholder="Start date">
            <input matEndDate placeholder="End date">
          </mat-date-range-input>
          <mat-datepicker-toggle matSuffix [for]="rangePicker"></mat-datepicker-toggle>
          <mat-date-range-picker #rangePicker></mat-date-range-picker>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
})
export class DatepickerComponent {}
