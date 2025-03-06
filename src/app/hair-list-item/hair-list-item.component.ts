import { Component, Input } from '@angular/core';
import { HairProduct } from '../models/hair-product';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-hair-list-item',
  imports: [
    NgIf
  ],
  templateUrl: './hair-list-item.component.html',
  standalone: true,
  styleUrl: './hair-list-item.component.css'
})
export class HairListItemComponent {
  @Input() product!: HairProduct;

}
