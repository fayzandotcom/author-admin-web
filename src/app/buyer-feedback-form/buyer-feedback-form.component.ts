import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, BuyerFeedbackService } from '../_services/index';

declare var $: any;

@Component({
  selector: 'app-buyer-feedback-form',
  templateUrl: './buyer-feedback-form.component.html',
  styleUrls: ['./buyer-feedback-form.component.css']
})
export class BuyerFeedbackFormComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private buyerFeedbackService: BuyerFeedbackService,
    private alertService: AlertService) { }

  ngOnInit() {

  }

  insertNew() {
    this.loading = true;
    this.alertService.removeAlert();
    this.buyerFeedbackService.insertNew(this.model.purchaseCode, this.model.email, this.model.phone, this.model.message)
        .subscribe(
          data => {
            this.alertService.success('Thank you for your feedback. We will ge back to you soon.');
          },
          error => {
            this.alertService.error('Sorry! some error occured. Please try again later. Thank you.');
            this.loading = false;
          });
  }

}
