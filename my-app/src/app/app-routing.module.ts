import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './MainSection/delete-user/delete-user.component';
import { EditUserComponent } from './MainSection/edit-user/edit-user.component';
import { DashboardComponent } from './MenuSection/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'edit-user', component: EditUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },
  { path: 'dashboard' , component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }