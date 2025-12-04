import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasMenu } from './directivas-menu';

describe('DirectivasMenu', () => {
  let component: DirectivasMenu;
  let fixture: ComponentFixture<DirectivasMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivasMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
