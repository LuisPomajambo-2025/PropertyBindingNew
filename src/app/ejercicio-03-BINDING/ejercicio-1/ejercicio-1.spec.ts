import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EJERCICIO1 } from './ejercicio-1';

describe('EJERCICIO1', () => {
  let component: EJERCICIO1;
  let fixture: ComponentFixture<EJERCICIO1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EJERCICIO1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EJERCICIO1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
