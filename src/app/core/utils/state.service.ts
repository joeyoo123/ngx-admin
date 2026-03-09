import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class StateService {
  protected layouts: any[] = [
    {
      name: 'One Column',
      icon: 'view_column',
      id: 'one-column',
      selected: true,
    },
    {
      name: 'Two Column',
      icon: 'view_week',
      id: 'two-column',
    },
    {
      name: 'Center Column',
      icon: 'view_array',
      id: 'center-column',
    },
  ];

  protected sidebars: any[] = [
    {
      name: 'Sidebar at layout start',
      icon: 'first_page',
      id: 'start',
      selected: true,
    },
    {
      name: 'Sidebar at layout end',
      icon: 'last_page',
      id: 'end',
    },
  ];

  protected layoutState$ = new BehaviorSubject(this.layouts[0]);
  protected sidebarState$ = new BehaviorSubject(this.sidebars[0]);

  setLayoutState(state: any): void {
    this.layoutState$.next(state);
  }

  getLayoutStates(): Observable<any[]> {
    return observableOf(this.layouts);
  }

  onLayoutState(): Observable<any> {
    return this.layoutState$.asObservable();
  }

  setSidebarState(state: any): void {
    this.sidebarState$.next(state);
  }

  getSidebarStates(): Observable<any[]> {
    return observableOf(this.sidebars);
  }

  onSidebarState(): Observable<any> {
    return this.sidebarState$.asObservable();
  }
}
