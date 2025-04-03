// @ts-ignore
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {HairListComponent} from "./app/hair-list/hair-list.component";
import {HairListItemComponent} from "./app/hair-list-item/hair-list-item.component";
import {ModifyHairProductItemComponent} from "./app/components/modify-hair-product-item/modify-hair-product-item.component";
import {PageNotFoundComponent} from "./app/components/page-not-found/page-not-found.component";



const routes: Routes =[
  {path:'', redirectTo: '/HairProduct', pathMatch: 'full'},
  {path: 'HairProduct', component:HairListComponent},
  {path: 'HairProduct/:id', component: HairListItemComponent},
  {path: 'modify-hair-product/:id', component: ModifyHairProductItemComponent},
  {path: 'modify-hair-product', component: ModifyHairProductItemComponent},
  {path:"**", component:PageNotFoundComponent}
]

bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)]
})
  .catch((err) => console.error(err));
