import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxSec2CardComponent } from './bx-sec2-card.component';

describe('BxSec2CardComponent', () => {
  let component: BxSec2CardComponent;
  let fixture: ComponentFixture<BxSec2CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxSec2CardComponent]
    });
    fixture = TestBed.createComponent(BxSec2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
