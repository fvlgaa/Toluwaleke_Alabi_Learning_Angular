import {Component, Input} from '@angular/core';
import {HairProduct} from "../models/hair-product";
import {FormsModule} from "@angular/forms";
import {HairListItemComponent} from "../hair-list-item/hair-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

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
  styleUrl: './hair-list.component.css'
})
export class HairListComponent {

  hairList: HairProduct[] = [
    { id: 1, name: "Argan Oil Shampoo", type: "Shampoo", price: 15.99, isOrganic: true, description: "Hydrating shampoo infused with argan oil for dry hair." },
    { id: 2, name: "Curl Defining Cream", type: "Styling Cream", price: 12.50, isOrganic: true, description: "Defines curls and reduces frizz with natural ingredients." },
    { id: 3, name: "Tea Tree Scalp Treatment", type: "Scalp Care", price: 18.75, isOrganic: false, description: "Soothing scalp oil with tea tree and peppermint extracts." },
    { id: 4, name: "Silk Press Serum", type: "Heat Protectant", price: 14.99, isOrganic: false, description: "Lightweight serum for smooth, frizz-free silk presses." },
    { id: 5, name: "Aloe Vera Leave-In Conditioner", type: "Conditioner", price: 11.25, isOrganic: true, description: "Moisturizing leave-in for soft and manageable hair." },
    { id: 6, name: "Black Castor Oil", type: "Oil", price: 9.99, isOrganic: true, description: "Strengthens hair and promotes growth with natural castor oil." }
  ];



}
