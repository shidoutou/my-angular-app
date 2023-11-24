import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceEntryComponent } from './entry.component';

describe('AttendanceEntryComponent', () => {
  let component: AttendanceEntryComponent;
  let fixture: ComponentFixture<AttendanceEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceEntryComponent]
    });
    fixture = TestBed.createComponent(AttendanceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
