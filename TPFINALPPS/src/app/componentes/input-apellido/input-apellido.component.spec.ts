import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputApellidoComponent } from './input-apellido.component';

describe('InputApellidoComponent', () => {
  let component: InputApellidoComponent;
  let fixture: ComponentFixture<InputApellidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputApellidoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
