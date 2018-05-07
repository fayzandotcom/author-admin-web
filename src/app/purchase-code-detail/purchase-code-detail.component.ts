import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, PurchaseCodeService } from '../_services/index';
import { error } from 'util';

@Component({
  selector: 'app-purchase-code-detail',
  templateUrl: './purchase-code-detail.component.html',
  styleUrls: ['./purchase-code-detail.component.css']
})
export class PurchaseCodeDetailComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private purchaseCodeService: PurchaseCodeService,
    private alertService: AlertService,
    private location: Location) {
      this.route.params.subscribe( params => this.getDetail(params['purchaseCode']))
    }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  getDetail(purchaseCode: string) {
    this.purchaseCodeService.getDetail(purchaseCode)
      .subscribe(
        resp => {
          this.model.purchaseCode = resp.purchase_code;
          this.model.itemName = resp.item_name;
          this.model.buyerName = resp.buyer_name;
          this.model.lastAttemptDate = resp.last_attempt_date;
          this.model.blacklist = resp.blacklist;
          this.model.triesAllowed = resp.total_tries;
          this.model.totalAttempt = resp.total_attempt;
        },
        error => {
          this.alertService.error('No data found!');
        });

  }

  update() {
    this.loading = true;
    this.alertService.removeAlert();
    this.purchaseCodeService.update(this.model.purchaseCode, this.model.blacklist, this.model.triesAllowed)
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
