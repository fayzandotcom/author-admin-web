import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { VerifyAttemptComponent } from './verify-attempt/verify-attempt.component';
import { BuyerFeedbackComponent } from './buyer-feedback/buyer-feedback.component';
import { BuyerFeedbackDetailComponent } from './buyer-feedback-detail/buyer-feedback-detail.component';
import { BuyerFeedbackFormComponent } from './buyer-feedback-form/buyer-feedback-form.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { SecureLayoutComponent } from './_layout/secure-layout/secure-layout.component';

const routes: Routes = [

    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' },
    // public routes
    {
      path: '',
      component: PublicLayoutComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'logout', component: LoginComponent },
        { path: 'feedback', component: BuyerFeedbackFormComponent },
      ]
    },
    // secure routes
    {
      path: '',
      component: SecureLayoutComponent,
      canActivate: [AuthGuard],
      children: [
        { path: 'dashboard',      component: DashboardComponent },
        { path: 'user-profile',   component: UserProfileComponent },
        { path: 'change-password',  component: ChangePasswordComponent },
        { path: 'verify-attempt', component: VerifyAttemptComponent },
        { path: 'buyer-feedback', component: BuyerFeedbackComponent },
        { path: 'buyer-feedback/:id', component: BuyerFeedbackDetailComponent },
        { path: 'table-list',     component: TableListComponent },
        { path: 'typography',     component: TypographyComponent },
        { path: 'icons',          component: IconsComponent },
        { path: 'maps',           component: MapsComponent },
        { path: 'notifications',  component: NotificationsComponent },
        { path: 'upgrade',        component: UpgradeComponent },
        { path: '',      component: DashboardComponent },
      ]
    },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
