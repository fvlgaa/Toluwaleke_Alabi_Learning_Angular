import { Component, Input } from '@angular/core';
import { HairProduct } from '../models/hair-product';
import { CurrencyPipe, UpperCasePipe, LowerCasePipe, NgIf } from '@angular/common';
import { OrganicLabelPipe } from '../pipes/organic-label.pipe';

// ✅ Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hair-list-item',
  standalone: true,
  templateUrl: './hair-list-item.component.html',
  styleUrl: './hair-list-item.component.css',
  imports: [
    NgIf,
    CurrencyPipe,
    UpperCasePipe,
    LowerCasePipe,
    OrganicLabelPipe,

    // ✅ Add Material modules here too
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class HairListItemComponent {
  @Input() product!: HairProduct;
}
