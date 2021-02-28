import { UserRegisterComponent } from "./user/user-register/user-register.component";
import { UserLoginComponent } from "./user/user-login/user-login.component";
import { PropertyDetailComponent } from "./property/Property-Detail/Property-Detail.component";
import { AddPropertyComponent } from "./property/add-Property/add-property.component";
import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HousingService } from "./services/housing.service";
import { UserServiceService } from "./services/user-service.service";
import { AlertifyService } from './services/alertify.service';

import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { from } from "rxjs";
import { AuthService } from "./services/auth.service";


const appRoutes: Routes = [
  {path: "", component: PropertyListComponent,},
  {path: "add-property",component: AddPropertyComponent,},
  {path: "rent-property",component: PropertyListComponent,},
  {path: "property-detail/:id",component: PropertyDetailComponent,},
  {path: "user/login",component: UserLoginComponent,},
  {path: "user/register",component: UserRegisterComponent,},
  {path: '**', component: PropertyListComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers:
  [HousingService,
  UserServiceService,
  AlertifyService,
  AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
