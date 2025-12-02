import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuentausuario } from './cuentausuario';

describe('Cuentausuario', () => {
  let component: Cuentausuario;
  let fixture: ComponentFixture<Cuentausuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cuentausuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuentausuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
