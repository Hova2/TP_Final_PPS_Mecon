import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibrarComponent } from './vibrar.component';

describe('VibrarComponent', () => {
  let component: VibrarComponent;
  let fixture: ComponentFixture<VibrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibrarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
