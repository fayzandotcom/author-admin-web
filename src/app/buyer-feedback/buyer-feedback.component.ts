import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, BuyerFeedbackService } from '../_services/index';
import { error } from 'util';

@Component({
  selector: 'app-buyer-feedback',
  templateUrl: './buyer-feedback.component.html',
  styleUrls: ['./buyer-feedback.component.css']
})
export class BuyerFeedbackComponent implements OnInit {
  tableData = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private buyerFeedbackService: BuyerFeedbackService,
    private alertService: AlertService) { }

  ngOnInit() {

    this.buyerFeedbackService.getAll()
      .subscribe(
        resp => {
          this.tableData = resp.data;
        },
        error => {
          this.alertService.error('No data found!');
        });

  }

}
