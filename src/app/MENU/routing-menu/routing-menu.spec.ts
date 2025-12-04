import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingMenu } from './routing-menu';

describe('RoutingMenu', () => {
  let component: RoutingMenu;
  let fixture: ComponentFixture<RoutingMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
