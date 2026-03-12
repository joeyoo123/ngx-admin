import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: NbSidebarService, useValue: { toggle: () => {} } },
        { provide: NbMenuService, useValue: { navigateHome: () => {} } },
        {
          provide: NbThemeService,
          useValue: {
            currentTheme: 'default',
            onMediaQueryChange: () => of([{}, { width: 1200 }]),
            onThemeChange: () => of({ name: 'default' }),
            changeTheme: () => {},
          },
        },
        { provide: UserData, useValue: { getUsers: () => of({ nick: { name: 'Test User' } }) } },
        { provide: LayoutService, useValue: { changeLayoutSize: () => {} } },
        {
          provide: NbMediaBreakpointsService,
          useValue: { getBreakpointsMap: () => ({ xl: 1200 }) },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
