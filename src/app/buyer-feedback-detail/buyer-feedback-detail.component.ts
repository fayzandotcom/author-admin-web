import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, BuyerFeedbackService } from '../_services/index';
import { error } from 'util';

@Component({
  selector: 'app-buyer-feedback-detail',
  templateUrl: './buyer-feedback-detail.component.html',
  styleUrls: ['./buyer-feedback-detail.component.css']
})
export class BuyerFeedbackDetailComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private buyerFeedbackService: BuyerFeedbackService,
    private alertService: AlertService) {
      this.route.params.subscribe( params => this.getDetail(params['id']))
    }

  ngOnInit() {
  }

  getDetail(id: string) {

    this.buyerFeedbackService.get(id)
      .subscribe(
        resp => {
          this.model = resp;
        },
        error => {
          this.alertService.error('No data found!');
        });

  }

  updateStatus(status: string) {
    this.loading = true;
    this.alertService.removeAlert();
    this.buyerFeedbackService.updateStatus(this.model.id, status)
      .subscribe(
        data => {
          this.model.status = status;
          this.alertService.success('Update success!');
        },
        error => {
          this.alertService.error('Fail to update!');
        });
    this.loading = false;
  }

}
