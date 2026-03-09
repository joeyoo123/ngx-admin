import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface AuthResult {
  success: boolean;
  messages: string[];
  errors: string[];
}

@Injectable()
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);

  isAuthenticated(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  login(email: string, password: string): Observable<AuthResult> {
    return of({
      success: true,
      messages: ['Login successful!'],
      errors: [],
    }).pipe(
      delay(1500),
      tap(result => {
        if (result.success) {
          this.loggedIn$.next(true);
        }
      }),
    );
  }

  register(fullName: string, email: string, password: string): Observable<AuthResult> {
    return of({
      success: true,
      messages: ['Registration successful!'],
      errors: [],
    }).pipe(delay(1500));
  }

  requestPassword(email: string): Observable<AuthResult> {
    return of({
      success: true,
      messages: ['Password reset email sent!'],
      errors: [],
    }).pipe(delay(1500));
  }

  resetPassword(newPassword: string): Observable<AuthResult> {
    return of({
      success: true,
      messages: ['Password changed successfully!'],
      errors: [],
    }).pipe(delay(1500));
  }

  logout(): Observable<AuthResult> {
    this.loggedIn$.next(false);
    return of({
      success: true,
      messages: ['Logged out successfully!'],
      errors: [],
    });
  }
}
