import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio01NGSTYLE } from './ejercicio01-ngstyle';

describe('Ejercicio01NGSTYLE', () => {
  let component: Ejercicio01NGSTYLE;
  let fixture: ComponentFixture<Ejercicio01NGSTYLE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio01NGSTYLE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio01NGSTYLE);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
