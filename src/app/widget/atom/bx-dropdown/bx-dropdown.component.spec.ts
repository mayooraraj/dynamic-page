import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxDropdownComponent } from './bx-dropdown.component';

describe('BxDropdownComponent', () => {
  let component: BxDropdownComponent;
  let fixture: ComponentFixture<BxDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxDropdownComponent]
    });
    fixture = TestBed.createComponent(BxDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
