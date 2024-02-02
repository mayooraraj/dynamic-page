import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxBadgeComponent } from './bx-badge.component';

describe('BxBadgeComponent', () => {
  let component: BxBadgeComponent;
  let fixture: ComponentFixture<BxBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxBadgeComponent]
    });
    fixture = TestBed.createComponent(BxBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
