import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IntoQuestionsComponent } from './into-questions/into-questions.component';
import {InterestBasicInfoComponent} from './interest-basic-info/interest-basic-info.component';
import {ProfileDashboardComponent} from './profile-dashboard/profile-dashboard.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import {AuthGuardService as AuthGuard} from './service/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
 
  
  {
    path: 'introq',
    component: IntoQuestionsComponent
    
  },
  {
    path: 'introi',
    component: InterestBasicInfoComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'matches',
    component: ProfileDashboardComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'basicinfo',
    component: BasicInfoComponent,
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
