import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule, NgOptimizedImage} from "@angular/common";

import { HeaderContentComponent } from './Arquimentor/components/header-content/header-content.component';
import {RouterOutlet} from "@angular/router";
import { MentorProfileComponent } from './user/pages/mentor-profile/mentor-profile.component';
import { StudentProfileComponent } from './user/pages/student-profile/student-profile.component';
import { AppRoutingModule } from './app-routing.module';
import {PublicationService} from "./Arquimentor/services/publication.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {PublicationIdComponent} from "./Arquimentor/pages/publication-id/publication-id.component";
import {ChatComponent} from "./Arquimentor/components/chat/chat.component";
import {ReviewsComponent} from "./Arquimentor/components/reviews/reviews.component";

import { CardPublicationContentComponent } from './Arquimentor/components/card-publication-content/card-publication-content.component';
import {HeaderComponent} from "./Arquimentor/components/header/header.component";
import{LoginComponent} from "./user/pages/login/login.component";
import {RegisterComponent} from "./user/pages/register/register.component";
import { MainComponent } from './Arquimentor/pages/main/main.component';
import {SubscriptionContentComponent} from "./subscription/pages/subscription-content/subscription-content.component";
import { CreatePostComponent } from './Arquimentor/pages/create-post/create-post.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { AppointmentComponent } from './advice/components/appointment/appointment.component';
import { InformationWindowComponent } from './Arquimentor/components/information-window/information-window.component';
import {AuthInterceptor} from "./shared/helpers/auth.interceptor";
import { SettingsComponent } from './Arquimentor/pages/settings/settings.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

import { NgxStripeModule } from 'ngx-stripe';
import { MatDialogModule } from '@angular/material/dialog';

import {ModalComponent} from "./subscription/components/modal/modal.component";
import {DetailArticleComponent} from "./subscription/pages/detail-article/detail-article.component";
import {PaymentComponent} from "./subscription/pages/payment/payment.component";
import { NotificationItemComponent } from './advice/pages/notification-item/notification-item.component';
import { NotificationListComponent } from './advice/pages/notification-list/notification-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContentComponent,
    MentorProfileComponent,
    StudentProfileComponent,
    PublicationIdComponent,
    ChatComponent,
    ReviewsComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    CardPublicationContentComponent,
    SubscriptionContentComponent,
    CreatePostComponent,
    AppointmentComponent,
    InformationWindowComponent,
    SettingsComponent,
    ModalComponent,
    DetailArticleComponent,
    PaymentComponent,
    NotificationItemComponent,
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgOptimizedImage,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    NgxStripeModule.forRoot('pk_test_51ODdN2DfqBM3nCd5wl2V5i8IhWVgxLG25CI7xvg7fvJ5fquCOvFj9qYLLZdrSbeamcg2LP8Nf8x3a7zxqXGylh1R00rXbH0SgY'),
  ],
  exports:[ NotificationItemComponent,],
  providers: [PublicationService, {
  provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
