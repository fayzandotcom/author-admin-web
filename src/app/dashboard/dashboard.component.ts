import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as Chartist from 'chartist';

import { DashboardService, AlertService, PurchaseCodeService } from '../_services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model: any = {};
  tableData = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService,
    private purchaseCodeService: PurchaseCodeService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getTotalPurchaseCodesCount();
    this.getExpirePurchaseCodesCount();
    this.getNewBuyerFeedbackCount();
    this.getUnresolveBuyerFeedbackCount();
    this.getCurrentPurchaseCode();
  }

  getTotalPurchaseCodesCount() {
    this.dashboardService.getTotalPurchaseCodesCount()
      .subscribe(
        data => {
          this.model.totalPurchaseCodes = data.count;
        },
        error => {
          this.model.totalPurchaseCodes = '0';
        }
      )
  }

  getExpirePurchaseCodesCount() {
    this.dashboardService.getExpirePurchaseCodesCount()
      .subscribe(
        data => {
          this.model.expirePurchaseCodes = data.count;
        },
        error => {
          this.model.expirePurchaseCodes = '0';
        }
      )
  }

  getNewBuyerFeedbackCount() {
    this.dashboardService.getNewBuyerFeedbackCount()
      .subscribe(
        data => {
          this.model.newBuyerFeedback = data.count;
        },
        error => {
          this.model.newBuyerFeedback = '0';
        }
      )
  }

  getUnresolveBuyerFeedbackCount() {
    this.dashboardService.getUnresolveBuyerFeedbackCount()
      .subscribe(
        data => {
          this.model.unresolveBuyerFeedback = data.count;
        },
        error => {
          this.model.unresolveBuyerFeedback = '0';
        }
      )
  }

  getCurrentPurchaseCode() {
    this.dashboardService.getCurrentPurchaseCode()
      .subscribe(
        resp => {
          this.tableData = resp.data;
        },
        error => {
          this.tableData = null;
        });
  }

  getPurchaseCodeLink() {
    return '/purchase-code';
  }

  getPurchaseCodeDetailLink(purchaseCode: string): string {
    return '/purchase-code/' + purchaseCode;
  }

  updateBlacklist(purchaseCode: string, blacklist: string) {
    this.alertService.removeAlert();
    this.purchaseCodeService.updateBlacklist(purchaseCode, blacklist)
      .subscribe(
        data => {
          this.alertService.success('Update success!');
          this.getCurrentPurchaseCode();
        },
        error => {
          this.alertService.error('Fail to update!');
        });
  }

  search(purchaseCode: string) {
    this.router.navigateByUrl('/purchase-code/' + this.model.purchaseCode);
  }

}
