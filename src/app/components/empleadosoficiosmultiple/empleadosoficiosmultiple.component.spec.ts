import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosoficiosmultipleComponent } from './empleadosoficiosmultiple.component';

describe('EmpleadosoficiosmultipleComponent', () => {
  let component: EmpleadosoficiosmultipleComponent;
  let fixture: ComponentFixture<EmpleadosoficiosmultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosoficiosmultipleComponent]
    });
    fixture = TestBed.createComponent(EmpleadosoficiosmultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
