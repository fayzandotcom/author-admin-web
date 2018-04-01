import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerFeedbackFormComponent } from './buyer-feedback-form.component';

describe('BuyerFeedbackFormComponent', () => {
  let component: BuyerFeedbackFormComponent;
  let fixture: ComponentFixture<BuyerFeedbackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerFeedbackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
