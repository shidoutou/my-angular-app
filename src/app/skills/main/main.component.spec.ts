import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSMainComponent } from './main.component';

describe('SkillSMainComponent', () => {
  let component: SkillSMainComponent;
  let fixture: ComponentFixture<SkillSMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillSMainComponent]
    });
    fixture = TestBed.createComponent(SkillSMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
