import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeEstamos } from './donde-estamos';

describe('DondeEstamos', () => {
  let component: DondeEstamos;
  let fixture: ComponentFixture<DondeEstamos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DondeEstamos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DondeEstamos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
