import { Injectable } from '@angular/core';
import { hairList } from "../models/mock/mockData-hair";
import { Observable, of } from "rxjs";
import { HairProduct } from "../models/hair-product";

@Injectable({
  providedIn: 'root'
})
export class HairProductService {
  private hairProducts: HairProduct[] = hairList;

  constructor() {}

  getHairProducts(): Observable<HairProduct[]> {
    return of(this.hairProducts);
  }

  getHairProductById(id: number): Observable<HairProduct | undefined> {
    return of(this.hairProducts.find(product => product.id === id));
  }

  addHairProduct(newProduct: HairProduct): Observable<HairProduct[]> {
    this.hairProducts.push({ ...newProduct, id: this.hairProducts.length + 1 });
    return of(this.hairProducts);
  }

  updateHairProduct(updatedProduct: HairProduct): Observable<HairProduct[]> {
    const index = this.hairProducts.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.hairProducts[index] = updatedProduct;
    }
    return of(this.hairProducts);
  }

  deleteHairProduct(id: number): Observable<HairProduct[]> {
    this.hairProducts = this.hairProducts.filter(product => product.id !== id);
    return of(this.hairProducts);
  }

  removeHairProductById(id: number): Observable<HairProduct | undefined> {
    const index = this.hairProducts.findIndex(product => product.id === id);
    return index !== -1 ? of(this.hairProducts.splice(index, 1)[0]) : of(undefined);
  }
}
