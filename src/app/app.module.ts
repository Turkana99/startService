import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoggingService } from './logging.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ObservablesService } from './observables.service';
import { AccountsService } from './accounts.service';
import { ContactComponent } from './contact/contact.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserListService } from './user-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ContactComponent,
    UserInfoComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [LoggingService,ObservablesService,AccountsService, UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
