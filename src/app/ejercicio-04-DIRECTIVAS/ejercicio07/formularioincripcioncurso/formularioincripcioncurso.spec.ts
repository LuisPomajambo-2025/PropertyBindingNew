import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularioincripcioncurso } from './formularioincripcioncurso';

describe('Formularioincripcioncurso', () => {
  let component: Formularioincripcioncurso;
  let fixture: ComponentFixture<Formularioincripcioncurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formularioincripcioncurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formularioincripcioncurso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
