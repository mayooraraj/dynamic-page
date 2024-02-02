import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxBadgesComponent } from './bx-badges.component';

describe('BxBadgesComponent', () => {
  let component: BxBadgesComponent;
  let fixture: ComponentFixture<BxBadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxBadgesComponent]
    });
    fixture = TestBed.createComponent(BxBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
