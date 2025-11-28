import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio02NGCLASS } from './ejercicio02-ngclass';

describe('Ejercicio02NGCLASS', () => {
  let component: Ejercicio02NGCLASS;
  let fixture: ComponentFixture<Ejercicio02NGCLASS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio02NGCLASS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio02NGCLASS);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
