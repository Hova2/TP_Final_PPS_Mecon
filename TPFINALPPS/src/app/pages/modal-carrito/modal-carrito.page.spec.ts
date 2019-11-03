import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCarritoPage } from './modal-carrito.page';

describe('ModalCarritoPage', () => {
  let component: ModalCarritoPage;
  let fixture: ComponentFixture<ModalCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCarritoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
