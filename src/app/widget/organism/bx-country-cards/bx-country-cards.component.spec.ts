import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxCountryCardsComponent } from './bx-country-cards.component';

describe('BxCountryCardsComponent', () => {
  let component: BxCountryCardsComponent;
  let fixture: ComponentFixture<BxCountryCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxCountryCardsComponent]
    });
    fixture = TestBed.createComponent(BxCountryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
