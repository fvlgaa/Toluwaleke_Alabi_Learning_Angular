import { Component, Input, OnInit } from '@angular/core';
import { HairProduct } from '../models/hair-product';
import { CurrencyPipe, UpperCasePipe, LowerCasePipe, NgIf } from '@angular/common';
import { OrganicLabelPipe } from '../pipes/organic-label.pipe';

@Component({
  selector: 'app-hair-list-item',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe,
    UpperCasePipe,
    LowerCasePipe,
    OrganicLabelPipe
  ],
  templateUrl: './hair-list-item.component.html',
  styleUrl: './hair-list-item.component.css'
})
export class HairListItemComponent {
  @Input() product!: HairProduct;
}
