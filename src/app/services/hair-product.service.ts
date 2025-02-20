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

  // Get all hair products
  getHairProducts(): Observable<HairProduct[]> {
    return of(this.hairProducts);  // Return the array as an observable
  }

  // Add a new hair product
  addHairProduct(newHairProduct: HairProduct): Observable<HairProduct[]> {
    this.hairProducts.push(newHairProduct);  // Add the new product to the array
    return of(this.hairProducts);  // Return the updated array
  }

  // Update an existing hair product
  updateHairProduct(updatedHairProduct: HairProduct): Observable<HairProduct[]> {
    const index = this.hairProducts.findIndex(product => product.id === updatedHairProduct.id);
    if (index !== -1) {
      this.hairProducts[index] = updatedHairProduct;  // Update the product in the array
    }
    return of(this.hairProducts);  // Return the updated array
  }

  // Delete a hair product by ID
  deleteHairProduct(hairProductId: number): Observable<HairProduct[]> {
    this.hairProducts = this.hairProducts.filter(product => product.id !== hairProductId);
    return of(this.hairProducts);
  }

  // Get a hair product by ID
  getHairProductById(hairProductId: number): Observable<HairProduct | undefined> {
    const foundProduct = this.hairProducts.find(product => product.id === hairProductId);
    return of(foundProduct);  // Return the found product or undefined
  }
  getAllContent(): Observable<HairProduct[]> {
    return of(hairList);  // Return the hairList array as an observable
  }
}

