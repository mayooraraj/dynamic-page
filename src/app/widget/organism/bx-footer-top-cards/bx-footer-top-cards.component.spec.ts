import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFooterTopCardsComponent } from './bx-footer-top-cards.component';

describe('BxFooterTopCardsComponent', () => {
  let component: BxFooterTopCardsComponent;
  let fixture: ComponentFixture<BxFooterTopCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxFooterTopCardsComponent]
    });
    fixture = TestBed.createComponent(BxFooterTopCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
