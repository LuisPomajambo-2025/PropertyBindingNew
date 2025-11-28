import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio05NGFOR } from './ejercicio05-ngfor';

describe('Ejercicio05NGFOR', () => {
  let component: Ejercicio05NGFOR;
  let fixture: ComponentFixture<Ejercicio05NGFOR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio05NGFOR]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio05NGFOR);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
