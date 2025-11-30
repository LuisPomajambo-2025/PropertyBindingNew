import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EJERCICIO6 } from './ejercicio-6';

describe('EJERCICIO6', () => {
  let component: EJERCICIO6;
  let fixture: ComponentFixture<EJERCICIO6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EJERCICIO6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EJERCICIO6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
