import { Component, OnInit } from '@angular/core';
import { HairProduct } from '../models/hair-product';
import { HairProductService } from '../services/hair-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hair-list',
  standalone: true,
  imports: [],
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
    this.router.navigate(['/modify', id]);
  }

  onDelete(id: number): void {
    this.hairProductService.deleteHairProduct(id).subscribe(() => {
      this.hairList = this.hairList.filter(hair => hair.id !== id);
    });
  }
}
