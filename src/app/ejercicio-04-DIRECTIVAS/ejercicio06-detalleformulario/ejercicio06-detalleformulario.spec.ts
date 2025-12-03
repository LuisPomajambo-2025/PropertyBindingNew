import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio06Detalleformulario } from './ejercicio06-detalleformulario';

describe('Ejercicio06Detalleformulario', () => {
  let component: Ejercicio06Detalleformulario;
  let fixture: ComponentFixture<Ejercicio06Detalleformulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio06Detalleformulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio06Detalleformulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
