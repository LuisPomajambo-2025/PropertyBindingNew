import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2empiezo } from './ej2empiezo';

describe('Ej2empiezo', () => {
  let component: Ej2empiezo;
  let fixture: ComponentFixture<Ej2empiezo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej2empiezo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej2empiezo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
