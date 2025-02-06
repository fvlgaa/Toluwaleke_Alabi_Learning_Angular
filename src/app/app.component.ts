import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HairProduct } from './models/hair-product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hair Product List';
  hairProducts: HairProduct[] = [
    { id: 1, name: 'Argan Oil Shampoo', type: 'Shampoo', price: 15.99, isOrganic: true, description: 'Hydrating and sulfate-free.' },
    { id: 2, name: 'Coconut Conditioner', type: 'Conditioner', price: 12.50, isOrganic: true },
    { id: 3, name: 'Keratin Hair Serum', type: 'Serum', price: 18.00, isOrganic: false, description: 'Repairs and strengthens hair.' },
    { id: 4, name: 'Tea Tree Scalp Oil', type: 'Hair Oil', price: 10.99, isOrganic: true, description: 'Soothes dry scalp and promotes hair growth.' },
    { id: 5, name: 'Volumizing Mousse', type: 'Styling Product', price: 14.75, isOrganic: false },
    { id: 6, name: 'Aloe Vera Gel', type: 'Styling Product', price: 9.99, isOrganic: true, description: 'Defines curls and adds moisture.' }
  ];
}

