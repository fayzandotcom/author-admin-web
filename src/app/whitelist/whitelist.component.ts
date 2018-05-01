import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, WhitelistService } from '../_services/index';
import { error } from 'util';

@Component({
  selector: 'app-whitelist',
  templateUrl: './whitelist.component.html',
  styleUrls: ['./whitelist.component.css']
})
export class WhitelistComponent implements OnInit {
  model: any = {};
  loading = false;
  tableData = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private whitelistService: WhitelistService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.whitelistService.get()
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

  add() {
    this.loading = true;
    this.whitelistService.add(this.model.purchaseCode)
      .subscribe(
        resp => {
          this.alertService.success('Successfully added!');
          this.get();
          this.loading = false;
        },
        error => {
          this.alertService.error('Fail to add whitelist!');
          this.loading = false;
        });
  }

  remove(purchaseCode: string) {
    this.whitelistService.remove(purchaseCode)
      .subscribe(
        resp => {
          this.alertService.success('Successfully removed!');
          this.get();
          this.loading = false;
        },
        error => {
          this.alertService.error('Fail to remove whitelist!');
          this.loading = false;
        });
  }

}
