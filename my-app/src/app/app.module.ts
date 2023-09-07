import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './MainSection/user-card/user-card.component';
import { UserListComponent } from './MainSection/user-list/user-list.component';
import { AddUserComponent } from './NavigationSection/add-user/add-user.component';
import { EditUserComponent } from './MainSection/edit-user/edit-user.component';
import { DeleteUserComponent } from './MainSection/delete-user/delete-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './MainSection/pagination/pagination.component';
import { SortingComponent } from './MainSection/sorting/sorting.component';
import { FilterComponent } from './MainSection/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    PaginationComponent,
    SortingComponent,
    FilterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'user-list', component: UserListComponent },
      { path: 'user-card', component: UserCardComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: '', redirectTo: '/user-list', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }