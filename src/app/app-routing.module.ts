import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo:'user-list', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'user-list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }