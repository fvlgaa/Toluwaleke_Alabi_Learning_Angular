import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HairListComponent } from './hair-list/hair-list.component'; // Assuming this is your home component
import { ModifyHairProductItemComponent } from './components/modify-hair-product-item/modify-hair-product-item.component';

export const routes: Routes = [
  { path: '', component: HairListComponent }, // Home page route
  { path: 'hair', component: HairListComponent }, // Hair list route
  { path: 'modify/:id', component: ModifyHairProductItemComponent }, // Modify hair product route
  { path: '**', redirectTo: 'hair' } // Redirect to the hair list if the route doesn't exist
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
