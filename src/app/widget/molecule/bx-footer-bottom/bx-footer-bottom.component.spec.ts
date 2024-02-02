import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFooterBottomComponent } from './bx-footer-bottom.component';

describe('BxFooterBottomComponent', () => {
  let component: BxFooterBottomComponent;
  let fixture: ComponentFixture<BxFooterBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxFooterBottomComponent]
    });
    fixture = TestBed.createComponent(BxFooterBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
