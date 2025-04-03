import { Component, OnInit } from '@angular/core';
import { HairProduct } from '../models/hair-product';
import { HairProductService } from '../services/hair-product.service';
import { Router, RouterModule } from '@angular/router';
import {NgClass, NgForOf, NgIf, UpperCasePipe,CurrencyPipe} from '@angular/common';
import {HairListItemComponent} from '../hair-list-item/hair-list-item.component';

@Component({
  selector: 'app-hair-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    HairListItemComponent,
    NgClass,
    RouterModule,
    CurrencyPipe,
    UpperCasePipe
  ],
  templateUrl: './hair-list.component.html',
  styleUrls: ['./hair-list.component.css']
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
