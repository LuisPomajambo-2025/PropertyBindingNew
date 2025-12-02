import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalleinmueble } from './detalleinmueble';

describe('Detalleinmueble', () => {
  let component: Detalleinmueble;
  let fixture: ComponentFixture<Detalleinmueble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalleinmueble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalleinmueble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
