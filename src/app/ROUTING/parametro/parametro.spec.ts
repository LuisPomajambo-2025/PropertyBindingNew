import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parametro } from './parametro';

describe('Parametro', () => {
  let component: Parametro;
  let fixture: ComponentFixture<Parametro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parametro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parametro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
