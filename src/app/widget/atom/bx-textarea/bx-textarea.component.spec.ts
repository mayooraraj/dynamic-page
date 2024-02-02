import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxTextareaComponent } from './bx-textarea.component';

describe('BxTextareaComponent', () => {
  let component: BxTextareaComponent;
  let fixture: ComponentFixture<BxTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxTextareaComponent]
    });
    fixture = TestBed.createComponent(BxTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
