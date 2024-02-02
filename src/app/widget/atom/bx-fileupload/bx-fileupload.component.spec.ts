import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFileuploadComponent } from './bx-fileupload.component';

describe('BxFileuploadComponent', () => {
  let component: BxFileuploadComponent;
  let fixture: ComponentFixture<BxFileuploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxFileuploadComponent]
    });
    fixture = TestBed.createComponent(BxFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
