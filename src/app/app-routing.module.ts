import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './Arquimentor/components/profiles/student-profile/student-profile.component';
import { MentorProfileComponent } from './Arquimentor/components/profiles/mentor-profile/mentor-profile.component';
import {ViewProfileComponent} from "./Arquimentor/components/view-profile/view-profile.component";
import {ChatComponent} from "./Arquimentor/components/chat/chat.component";
import {ReviewsComponent} from "./Arquimentor/components/reviews/reviews.component";

import {LandigPageComponent} from "./Arquimentor/components/landig-page/landig-page.component";
import{CardPublicationContentComponent} from "./Arquimentor/components/card-publication-content/card-publication-content.component";
import {LoginComponent} from "./Arquimentor/components/login/login.component";
import {RegisterComponent} from "./Arquimentor/components/register/register.component";


const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'student-profile/:studentId', component: StudentProfileComponent },
  { path: 'mentor-profile/:mentorId', component: MentorProfileComponent },
  { path: 'view', component: ViewProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'reviews', component: ReviewsComponent },

  { path: 'landingpage', component: LandigPageComponent },
  { path: 'card', component: CardPublicationContentComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
