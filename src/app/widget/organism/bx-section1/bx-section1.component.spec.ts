import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxSection1Component } from './bx-section1.component';

describe('BxSection1Component', () => {
  let component: BxSection1Component;
  let fixture: ComponentFixture<BxSection1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxSection1Component]
    });
    fixture = TestBed.createComponent(BxSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
