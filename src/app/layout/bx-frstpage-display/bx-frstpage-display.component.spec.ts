import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFrstpageDisplayComponent } from './bx-frstpage-display.component';

describe('BxFrstpageDisplayComponent', () => {
  let component: BxFrstpageDisplayComponent;
  let fixture: ComponentFixture<BxFrstpageDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxFrstpageDisplayComponent]
    });
    fixture = TestBed.createComponent(BxFrstpageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
