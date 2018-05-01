import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCodeDetailComponent } from './purchase-code-detail.component';

describe('PurchaseCodeComponent', () => {
  let component: PurchaseCodeDetailComponent;
  let fixture: ComponentFixture<PurchaseCodeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
