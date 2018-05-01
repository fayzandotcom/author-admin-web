import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/purchase-code', title: 'Purchase Code',  icon: 'receipt', class: '' },
    { path: '/whitelist', title: 'Whitelist',  icon: 'list', class: '' },
    { path: '/verify-attempt', title: 'Verify Attempt',  icon: 'done', class: '' },
    // { path: '/buyer-feedback', title: 'Buyer Feedback',  icon: 'feedback', class: '' },
    { path: '/change-password', title: 'Change Password',  icon: 'person', class: '' },
    { path: '/logout', title: 'Logout',  icon: 'lock', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
