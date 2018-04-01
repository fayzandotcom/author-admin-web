import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerFeedbackComponent } from './buyer-feedback.component';

describe('BuyerFeedbackComponent', () => {
  let component: BuyerFeedbackComponent;
  let fixture: ComponentFixture<BuyerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
