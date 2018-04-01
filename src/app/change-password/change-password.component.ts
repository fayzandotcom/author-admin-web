import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { error } from 'util';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {

    }

  ngOnInit() {
  }

  changePassword() {

    if (this.model.newPassword !== this.model.confirmPassword) {
      this.alertService.error('New password missmatch!');
      return;
    }

    this.loading = true;
    this.alertService.removeAlert();
    const username = localStorage.getItem('loginUsername');
    this.userService.changePassword(username, this.model.oldPassword, this.model.newPassword)
      .subscribe(
        data => {
          this.model.status = status;
          this.alertService.success('Password changed successflly!');
        },
        error => {
          this.alertService.error('Error occured. Please try again.');
        });
    this.loading = false;
  }

}
