import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HairProduct } from '../models/hair-product';
import { hairList } from '../models/mock/mockData-hair';  // Import your mock data

@Injectable({
  providedIn: 'root',
})
export class HairProductService {
  private hairProducts: HairProduct[] = hairList;

  constructor() {}

  // Add this method to retrieve all hair products
  getAllContent(): Observable<HairProduct[]> {
    return of(this.hairProducts);
  }

  getHairProductById(id: number): Observable<HairProduct | undefined> {
    const product = this.hairProducts.find((p) => p.id === id);
    return of(product);  // Return the found product or undefined
  }

  // Add a new hair product
  addHairProduct(newProduct: HairProduct): Observable<HairProduct[]> {
    this.hairProducts.push(newProduct);  // Push new product into the list
    return of(this.hairProducts);  // Return updated list
  }

  // Update an existing hair product
  updateHairProduct(updatedProduct: HairProduct): Observable<HairProduct[]> {
    const index = this.hairProducts.findIndex((product) => product.id === updatedProduct.id);
    if (index !== -1) {
      this.hairProducts[index] = updatedProduct;  // Replace the old product with the updated one
    }
    return of(this.hairProducts);  // Return updated list
  }

  // Delete a hair product by ID
  deleteHairProduct(id: number): Observable<HairProduct[]> {
    const index = this.hairProducts.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.hairProducts.splice(index, 1);  // Remove product from the list
    }
    return of(this.hairProducts);  // Return updated list
  }
}
