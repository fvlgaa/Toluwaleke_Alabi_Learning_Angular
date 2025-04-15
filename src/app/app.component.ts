import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HairProduct } from './models/hair-product';
import {HairProductService} from './services/hair-product.service';
import {NgIf} from '@angular/common';
import {HairListItemComponent} from './hair-list-item/hair-list-item.component';
import {HairListComponent} from './hair-list/hair-list.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NgIf,
    HairListItemComponent,
    HairListComponent,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'lekes hair products';
  contentItem: HairProduct | undefined;

  constructor(private hairProductService: HairProductService) { }

  ngOnInit(): void {

    const id = 1;
    this.hairProductService.getHairProductById(id).subscribe(data => {
      this.contentItem = data;
    });
  }
}

