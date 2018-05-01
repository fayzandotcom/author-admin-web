import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, PurchaseCodeService } from '../_services/index';
import { error } from 'util';

@Component({
  selector: 'app-purchase-code',
  templateUrl: './purchase-code.component.html',
  styleUrls: ['./purchase-code.component.css']
})
export class PurchaseCodeComponent implements OnInit {
  model: any = {};
  loading = false;
  tableData = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private purchaseCodeService: PurchaseCodeService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.purchaseCodeService.get()
      .subscribe(
        resp => {
          this.tableData = resp.data;
        },
        error => {
          this.alertService.error('No data found!');
        });
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
          this.get();
        },
        error => {
          this.alertService.error('Fail to update!');
        });
  }

  search(purchaseCode: string) {
    this.router.navigateByUrl('/purchase-code/' + this.model.purchaseCode);
  }

}
