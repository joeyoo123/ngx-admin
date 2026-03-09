import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'ngx-calendar',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Calendar</mat-card-title></mat-card-header>
      <mat-card-content>
        <mat-calendar [selected]="selectedDate" (selectedChange)="onDateChange($event)"></mat-calendar>
        <p>Selected date: {{ selectedDate?.toLocaleDateString() || 'None' }}</p>
      </mat-card-content>
    </mat-card>
  `,
})
export class CalendarComponent {
  selectedDate: Date | null = new Date();
  onDateChange(date: Date) { this.selectedDate = date; }
}
