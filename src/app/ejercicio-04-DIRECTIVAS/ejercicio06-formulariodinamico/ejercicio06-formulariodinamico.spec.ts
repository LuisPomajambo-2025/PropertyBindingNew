import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio06FORMULARIODINAMICO } from './ejercicio06-formulariodinamico';

describe('Ejercicio06FORMULARIODINAMICO', () => {
  let component: Ejercicio06FORMULARIODINAMICO;
  let fixture: ComponentFixture<Ejercicio06FORMULARIODINAMICO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio06FORMULARIODINAMICO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio06FORMULARIODINAMICO);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
