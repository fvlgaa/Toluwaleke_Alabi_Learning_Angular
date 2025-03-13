import { Component, OnInit } from '@angular/core';
import { HairProduct } from '../models/hair-product';
import { HairProductService } from '../services/hair-product.service';

import { FormsModule } from "@angular/forms";
import { HairListItemComponent } from "../hair-list-item/hair-list-item.component";
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: 'app-hair-list',
  standalone: true,
  imports: [
    FormsModule,
    HairListItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './hair-list.component.html',
  styleUrls: ['./hair-list.component.css']  // Corrected to 'styleUrls' (plural)
})
export class HairListComponent implements OnInit {
  hairList: HairProduct[] = [];

  constructor(private hairProductService: HairProductService) { }

  ngOnInit(): void {
    // Fetching data using the service
    this.hairProductService.getAllContent().subscribe(data => {
      this.hairList = data;  // Storing the fetched data
    });
  }
}

