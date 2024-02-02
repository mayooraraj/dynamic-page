import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxReactiveFormComponent } from './bx-reactive-form.component';

describe('BxReactiveFormComponent', () => {
  let component: BxReactiveFormComponent;
  let fixture: ComponentFixture<BxReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxReactiveFormComponent]
    });
    fixture = TestBed.createComponent(BxReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
