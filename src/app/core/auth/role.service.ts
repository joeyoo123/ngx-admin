import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class RoleService {
  getRole(): Observable<string> {
    return of('guest');
  }
}
