import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { DashboardService } from '../_services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model: any = {};
  tableData = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getTotalPurchaseCodesCount();
    this.getExpirePurchaseCodesCount();
    this.getNewBuyerFeedbackCount();
    this.getUnresolveBuyerFeedbackCount();
    this.getNewBuyerFeedback();
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

  getNewBuyerFeedback() {
    this.dashboardService.getNewBuyerFeedback()
      .subscribe(
        resp => {
          this.tableData = resp.data;
        },
        error => {
          this.tableData = null;
        });
  }

}
