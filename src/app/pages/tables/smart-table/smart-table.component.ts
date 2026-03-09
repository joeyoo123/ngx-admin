import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface UserData { id: number; firstName: string; lastName: string; username: string; email: string; age: number; }

@Component({
  selector: 'ngx-smart-table',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Smart Table</mat-card-title></mat-card-header>
      <mat-card-content>
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>Filter</mat-label>
          <input matInput (keyup)="applyFilter($event)" placeholder="Search...">
          <mat-icon matPrefix>search</mat-icon>
        </mat-form-field>
        <div class="table-container">
          <table mat-table [dataSource]="dataSource" matSort>
            <ng-container matColumnDef="id"><th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th><td mat-cell *matCellDef="let row">{{row.id}}</td></ng-container>
            <ng-container matColumnDef="firstName"><th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th><td mat-cell *matCellDef="let row">{{row.firstName}}</td></ng-container>
            <ng-container matColumnDef="lastName"><th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th><td mat-cell *matCellDef="let row">{{row.lastName}}</td></ng-container>
            <ng-container matColumnDef="username"><th mat-header-cell *matHeaderCellDef mat-sort-header>Username</th><td mat-cell *matCellDef="let row">{{row.username}}</td></ng-container>
            <ng-container matColumnDef="email"><th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th><td mat-cell *matCellDef="let row">{{row.email}}</td></ng-container>
            <ng-container matColumnDef="age"><th mat-header-cell *matHeaderCellDef mat-sort-header>Age</th><td mat-cell *matCellDef="let row">{{row.age}}</td></ng-container>
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </div>
        <mat-paginator [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`.filter-field{width:100%}.table-container{overflow-x:auto}table{width:100%}`],
})
export class SmartTableComponent implements AfterViewInit {
  displayedColumns = ['id', 'firstName', 'lastName', 'username', 'email', 'age'];
  dataSource = new MatTableDataSource<UserData>(this.generateData());
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() { this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; }
  applyFilter(event: Event) { this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase(); }

  private generateData(): UserData[] {
    const firstNames = ['Mark', 'Jacob', 'Larry', 'John', 'Jane', 'Alice', 'Bob', 'Carol', 'Dave', 'Eve'];
    const lastNames = ['Otto', 'Thornton', 'Bird', 'Snow', 'Doe', 'Smith', 'Jones', 'Brown', 'Wilson', 'Taylor'];
    return Array.from({length: 50}, (_, i) => ({
      id: i + 1,
      firstName: firstNames[i % firstNames.length],
      lastName: lastNames[i % lastNames.length],
      username: '@' + firstNames[i % firstNames.length].toLowerCase(),
      email: firstNames[i % firstNames.length].toLowerCase() + '@example.com',
      age: 20 + (i % 40),
    }));
  }
}
