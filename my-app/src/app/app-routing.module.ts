import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './MainSection/delete-user/delete-user.component';
import { EditUserComponent } from './MainSection/edit-user/edit-user.component';
import { DashboardComponent } from './MenuSection/dashboard/dashboard.component';
import { ForgotPasswordUserComponent } from './Login/forgot-password-user/forgot-password-user.component';
import { ResetPasswordUserComponent } from './Login/reset-password-user/reset-password-user.component';
import { SignupComponent } from './Login/signup/signup.component';
import { UserSignInComponent } from './Login/user-sign-in/user-sign-in.component';

const routes: Routes = [
  { path: 'edit-user', component: EditUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },
  { path: 'dashboard' , component:DashboardComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: UserSignInComponent },
  { path: 'forgot-password', component: ForgotPasswordUserComponent },
  { path: 'reset-password', component: ResetPasswordUserComponent },  
  { path: '', redirectTo: '/signup', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }