import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HairListComponent } from './hair-list/hair-list.component';
import { ModifyHairProductItemComponent } from './components/modify-hair-product-item/modify-hair-product-item.component';

export const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
