import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer2destino } from './ejer2destino';

describe('Ejer2destino', () => {
  let component: Ejer2destino;
  let fixture: ComponentFixture<Ejer2destino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejer2destino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer2destino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
