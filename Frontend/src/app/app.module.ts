import { PropertyDetailComponent } from './property/Property-Detail/Property-Detail.component';
import { AddPropertyComponent } from "./property/AddProperty/AddProperty.component";
import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import {FormsModule} from "@angular/forms";

import { HousingService } from "./services/housing.service";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { from } from "rxjs";

const appRoutes: Routes = [
  {
    path: "",
    component: PropertyListComponent
  },
  {
    path: "add-property",
    component: AddPropertyComponent,
  },
  {
    path: "rent-property",
    component: PropertyListComponent,
  },
  {
    path: "property-detail/:id",
    component: PropertyDetailComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
