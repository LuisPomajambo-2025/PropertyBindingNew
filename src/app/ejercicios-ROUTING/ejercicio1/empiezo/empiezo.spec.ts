import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empiezo } from './empiezo';

describe('Empiezo', () => {
  let component: Empiezo;
  let fixture: ComponentFixture<Empiezo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empiezo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empiezo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
