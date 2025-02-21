import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HairProduct } from './models/hair-product';
import {HairProductService} from './services/hair-product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  contentItem: HairProduct | undefined;  // To hold the single ContentListItem data

  constructor(private hairProductService: HairProductService) { }  // Inject the service

  ngOnInit(): void {
    // Fetch a specific hair product by ID (replace with the ID of your choice)
    const id = 1;  // Use the ID of the item you want to retrieve
    this.hairProductService.getHairProductById(id).subscribe(data => {
      this.contentItem = data;  // Assign the fetched data to contentItem
    });
  }
}

