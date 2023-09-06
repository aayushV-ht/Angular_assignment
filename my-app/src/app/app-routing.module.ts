import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './MainSection/delete-user/delete-user.component';
import { EditUserComponent } from './MainSection/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'edit-user', component: EditUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }