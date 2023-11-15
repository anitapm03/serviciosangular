import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosoficiosComponent } from './empleadosoficios.component';

describe('EmpleadosoficiosComponent', () => {
  let component: EmpleadosoficiosComponent;
  let fixture: ComponentFixture<EmpleadosoficiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosoficiosComponent]
    });
    fixture = TestBed.createComponent(EmpleadosoficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
