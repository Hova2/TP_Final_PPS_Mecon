import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComprasPage } from './carrito-compras.page';

describe('CarritoComprasPage', () => {
  let component: CarritoComprasPage;
  let fixture: ComponentFixture<CarritoComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoComprasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
