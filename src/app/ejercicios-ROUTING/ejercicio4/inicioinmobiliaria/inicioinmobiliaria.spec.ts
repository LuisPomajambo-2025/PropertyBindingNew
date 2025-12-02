import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inicioinmobiliaria } from './inicioinmobiliaria';

describe('Inicioinmobiliaria', () => {
  let component: Inicioinmobiliaria;
  let fixture: ComponentFixture<Inicioinmobiliaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inicioinmobiliaria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inicioinmobiliaria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
