import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PagesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have menu items', () => {
    const fixture = TestBed.createComponent(PagesComponent);
    const component = fixture.componentInstance;
    expect(component.menu).toBeDefined();
    expect(component.menu.length).toBeGreaterThan(0);
  });
});
