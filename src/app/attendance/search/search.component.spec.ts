import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSearchComponent } from './search.component';

describe('AttendanceSearchComponent', () => {
  let component: AttendanceSearchComponent;
  let fixture: ComponentFixture<AttendanceSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceSearchComponent]
    });
    fixture = TestBed.createComponent(AttendanceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
