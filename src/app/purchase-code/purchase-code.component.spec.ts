import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCodeComponent } from './purchase-code.component';

describe('PurchaseCodeComponent', () => {
  let component: PurchaseCodeComponent;
  let fixture: ComponentFixture<PurchaseCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
