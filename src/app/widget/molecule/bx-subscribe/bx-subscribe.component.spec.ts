import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxSubscribeComponent } from './bx-subscribe.component';

describe('BxSubscribeComponent', () => {
  let component: BxSubscribeComponent;
  let fixture: ComponentFixture<BxSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxSubscribeComponent]
    });
    fixture = TestBed.createComponent(BxSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
