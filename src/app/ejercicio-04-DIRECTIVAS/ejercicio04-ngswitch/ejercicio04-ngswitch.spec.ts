import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio04NGSWITCH } from './ejercicio04-ngswitch';

describe('Ejercicio04NGSWITCH', () => {
  let component: Ejercicio04NGSWITCH;
  let fixture: ComponentFixture<Ejercicio04NGSWITCH>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio04NGSWITCH]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio04NGSWITCH);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
