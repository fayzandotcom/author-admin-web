import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, VerifyAttemptService } from '../_services/index';
import { error } from 'util';

@Component({
  selector: 'app-verify-attempt',
  templateUrl: './verify-attempt.component.html',
  styleUrls: ['./verify-attempt.component.css']
})
export class VerifyAttemptComponent implements OnInit {
  model: any = {};
  loading = false;
  updateFormHidden = true;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private verifyAttemptService: VerifyAttemptService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  search() {
    this.loading = true;
    this.updateFormHidden = true;
    this.alertService.removeAlert();
    console.log('search verify attempt');
    this.verifyAttemptService.get(this.model.purchaseCode)
      .subscribe(
        data => {
          this.updateFormHidden = false;
          this.model.buyerName = data.buyer_name;
          this.model.lastAttemptDate = data.last_attempt_date;
          this.model.triesAllowed = data.total_tries;
          this.model.totalAttempt = data.total_attempt;
        },
        error => {
          this.alertService.error('No data found!');
        });
    this.loading = false;
  }

  update() {
    this.loading = true;
    this.alertService.removeAlert();
    console.log('update verify attempt');
    this.verifyAttemptService.updateTriesAllowed(this.model.purchaseCode, this.model.triesAllowed)
      .subscribe(
        data => {
          this.alertService.success('Update success!');
        },
        error => {
          this.alertService.error('Fail to update!');
        });
    this.loading = false;
  }

}
