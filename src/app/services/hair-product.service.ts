import { Injectable } from '@angular/core';
import { hairList } from "../models/mock/mockData-hair";
import { Observable, of } from "rxjs";
import { HairProduct } from "../models/hair-product";

@Injectable({
  providedIn: 'root'
})
export class HairProductService {
  private hairProducts: HairProduct[] = hairList;

  constructor() { }

  getHairProducts(): Observable<HairProduct[]> {
    return of(this.hairProducts);
  }

  getAllContent(): Observable<HairProduct[]> {
    return of(this.hairProducts);
  }

  addHairProduct(newHairProduct: HairProduct): Observable<HairProduct[]> {
    this.hairProducts.push(newHairProduct);
    return of(this.hairProducts);
  }

  updateHairProduct(updatedHairProduct: HairProduct): Observable<HairProduct[]> {
    const index = this.hairProducts.findIndex(product => product.id === updatedHairProduct.id);
    if (index !== -1) {
      this.hairProducts[index] = updatedHairProduct;
    }
    return of(this.hairProducts);
  }

  deleteHairProduct(hairProductId: number): Observable<HairProduct[]> {
    const index = this.hairProducts.findIndex(product => product.id === hairProductId);
    if (index !== -1) {
      this.hairProducts.splice(index, 1);
    }
    return of(this.hairProducts);
  }

  getHairProductById(hairProductId: number): Observable<HairProduct | undefined> {
    const foundProduct = this.hairProducts.find(product => product.id === hairProductId);
    return of(foundProduct);
  }

  getHairProductByIdNumber(id: number): Observable<HairProduct | undefined> {
    const foundProduct = this.hairProducts.find(product => product.id === id);
    return of(foundProduct);
  }

  addHairProductAndReturnArray(newProduct: HairProduct): Observable<HairProduct[]> {
    this.hairProducts.push(newProduct);
    return of(this.hairProducts);
  }

  updateHairProductAndReturnArray(updatedProduct: HairProduct): Observable<HairProduct[]> {
    const index = this.hairProducts.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.hairProducts[index] = updatedProduct;
    }
    return of(this.hairProducts);
  }

  removeHairProductByIdAndReturnRemoved(id: number): Observable<HairProduct | undefined> {
    const index = this.hairProducts.findIndex(product => product.id === id);
    if (index !== -1) {
      const removedProduct = this.hairProducts.splice(index, 1)[0];
      return of(removedProduct);
    }
    return of(undefined);
  }
}
