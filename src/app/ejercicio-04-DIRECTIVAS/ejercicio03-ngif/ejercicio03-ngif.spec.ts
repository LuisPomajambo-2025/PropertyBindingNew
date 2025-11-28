import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio03NGIF } from './ejercicio03-ngif';

describe('Ejercicio03NGIF', () => {
  let component: Ejercicio03NGIF;
  let fixture: ComponentFixture<Ejercicio03NGIF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio03NGIF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio03NGIF);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
