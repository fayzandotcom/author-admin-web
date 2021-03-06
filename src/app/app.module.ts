import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService, VerifyAttemptService, BuyerFeedbackService,
        PurchaseCodeService, DashboardService, WhitelistService } from './_services/index';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { VerifyAttemptComponent } from './verify-attempt/verify-attempt.component';
import { BuyerFeedbackComponent } from './buyer-feedback/buyer-feedback.component';
import { BuyerFeedbackDetailComponent } from './buyer-feedback-detail/buyer-feedback-detail.component';
import { BuyerFeedbackFormComponent } from './buyer-feedback-form/buyer-feedback-form.component';
import { PurchaseCodeComponent } from './purchase-code/purchase-code.component';
import { PurchaseCodeDetailComponent } from './purchase-code-detail/purchase-code-detail.component';
import { WhitelistComponent } from './whitelist/whitelist.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { LoginComponent } from './login/login.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { SecureLayoutComponent } from './_layout/secure-layout/secure-layout.component';

import { AppConfig } from './app.config'

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    UserProfileComponent,
    ChangePasswordComponent,
    VerifyAttemptComponent,
    BuyerFeedbackComponent,
    BuyerFeedbackDetailComponent,
    BuyerFeedbackFormComponent,
    PurchaseCodeComponent,
    PurchaseCodeDetailComponent,
    WhitelistComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    PublicLayoutComponent,
    SecureLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AppConfig,
    AlertService,
    AuthenticationService,
    VerifyAttemptService,
    BuyerFeedbackService,
    PurchaseCodeService,
    UserService,
    DashboardService,
    WhitelistService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
