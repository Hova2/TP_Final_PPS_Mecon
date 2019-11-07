import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConTabsPage } from './pagina-con-tabs.page';

describe('PaginaConTabsPage', () => {
  let component: PaginaConTabsPage;
  let fixture: ComponentFixture<PaginaConTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaConTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaConTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
