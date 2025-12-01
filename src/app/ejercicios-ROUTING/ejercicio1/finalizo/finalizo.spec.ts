import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Finalizo } from './finalizo';

describe('Finalizo', () => {
  let component: Finalizo;
  let fixture: ComponentFixture<Finalizo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Finalizo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Finalizo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
