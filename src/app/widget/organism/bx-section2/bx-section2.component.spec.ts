import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxSection2Component } from './bx-section2.component';

describe('BxSection2Component', () => {
  let component: BxSection2Component;
  let fixture: ComponentFixture<BxSection2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxSection2Component]
    });
    fixture = TestBed.createComponent(BxSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
