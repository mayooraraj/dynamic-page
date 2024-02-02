import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFirstpageComponent } from './bx-firstpage.component';

describe('BxFirstpageComponent', () => {
  let component: BxFirstpageComponent;
  let fixture: ComponentFixture<BxFirstpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxFirstpageComponent]
    });
    fixture = TestBed.createComponent(BxFirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
