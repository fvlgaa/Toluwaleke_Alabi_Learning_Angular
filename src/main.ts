// @ts-ignore
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {HairListComponent} from "./app/hair-list/hair-list.component";
import {HairListItemComponent} from "./app/hair-list-item/hair-list-item.component";



const routes: Routes =[
  {path:'', redirectTo: '/students', pathMatch: 'full'},
  {path: 'HairProduct', component:HairListComponent},
  {path: 'HairProduct/:id', component: HairListItemComponent},

]
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
