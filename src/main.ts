// @ts-ignore
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { HairListComponent } from './app/hair-list/hair-list.component';
import { HairListItemComponent } from './app/hair-list-item/hair-list-item.component';
import { ModifyHairProductItemComponent } from './app/components/modify-hair-product-item/modify-hair-product-item.component';
import { PageNotFoundComponent } from './app/components/page-not-found/page-not-found.component';

// ✅ Import the Angular Material modules you use
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

const routes: Routes = [
  { path: '', redirectTo: '/HairProduct', pathMatch: 'full' },
  { path: 'HairProduct', component: HairListComponent },
  { path: 'HairProduct/:id', component: HairListItemComponent },
  { path: 'modify-hair-product/:id', component: ModifyHairProductItemComponent },
  { path: 'modify-hair-product', component: ModifyHairProductItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // ✅ Register Material modules
    importProvidersFrom(
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      MatChipsModule
    )
  ]
}).catch((err) => console.error(err));
