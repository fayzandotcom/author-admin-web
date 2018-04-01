import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAttemptComponent } from './verify-attempt.component';

describe('UserProfileComponent', () => {
  let component: VerifyAttemptComponent;
  let fixture: ComponentFixture<VerifyAttemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyAttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
