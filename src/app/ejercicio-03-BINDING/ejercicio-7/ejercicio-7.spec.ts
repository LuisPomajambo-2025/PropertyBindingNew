import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EJERCICIO7 } from './ejercicio-7';

describe('EJERCICIO7', () => {
  let component: EJERCICIO7;
  let fixture: ComponentFixture<EJERCICIO7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EJERCICIO7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EJERCICIO7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
