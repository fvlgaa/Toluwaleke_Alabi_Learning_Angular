import { Component, OnInit } from '@angular/core';
import { HairProduct } from '../models/hair-product';
import { HairProductService } from '../services/hair-product.service';
import { Router, RouterModule } from '@angular/router';
import {NgClass, NgForOf, NgIf, UpperCasePipe,CurrencyPipe} from '@angular/common';
import {HairListItemComponent} from '../hair-list-item/hair-list-item.component';
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {FocusDirective} from '../directives/focus.directive';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  imports: [
    NgIf,
    NgForOf,
    HairListItemComponent,
    NgClass,
    RouterModule,
    CurrencyPipe,
    UpperCasePipe,
    HoverHighlightDirective,
    FocusDirective,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],

  selector: 'app-hair-list',
  standalone: true,
  styleUrls: ['./hair-list.component.css'],
  templateUrl: './hair-list.component.html'
})
export class HairListComponent implements OnInit {
  hairList: HairProduct[] = [];

  constructor(
    private hairProductService: HairProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.hairProductService.getAllContent().subscribe(data => {
      this.hairList = data;
    });
  }

  onEdit(id: number): void {
    this.router.navigate(['/modify-hair-product', id]);
  }

  onDelete(id: number): void {
    this.hairProductService.deleteHairProduct(id).subscribe(() => {
      this.hairList = this.hairList.filter(hair => hair.id !== id);
    });
  }
}
