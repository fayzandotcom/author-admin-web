import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerFeedbackDetailComponent } from './buyer-feedback-detail.component';

describe('BuyerFeedbackDetailComponent', () => {
  let component: BuyerFeedbackDetailComponent;
  let fixture: ComponentFixture<BuyerFeedbackDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerFeedbackDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerFeedbackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
