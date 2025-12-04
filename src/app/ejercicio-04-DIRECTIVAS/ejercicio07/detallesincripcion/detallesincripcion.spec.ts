import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detallesincripcion } from './detallesincripcion';

describe('Detallesincripcion', () => {
  let component: Detallesincripcion;
  let fixture: ComponentFixture<Detallesincripcion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detallesincripcion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detallesincripcion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
