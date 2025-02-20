import { Component, Input } from '@angular/core';
import { HairProduct } from '../models/hair-product';

@Component({
  selector: 'app-hair-list-item',
  imports: [],
  templateUrl: './hair-list-item.component.html',
  standalone: true,
  styleUrl: './hair-list-item.component.css'
})
export class HairListItemComponent {
  @Input() product!: HairProduct;

}
