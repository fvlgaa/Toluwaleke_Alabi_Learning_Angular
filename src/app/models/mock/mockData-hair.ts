import { HairProduct } from "../hair-product"  ;  // Importing the HairProduct model

export const hairList: HairProduct[] = [
  {
    id: 1,
    name: "Argan Oil Shampoo",
    type: "Shampoo",
    price: 15.99,
    isOrganic: true,
    description: "Hydrating shampoo infused with argan oil for dry hair.",
    imageUrl: "assets/images/product 1.jpg"
  },
  {
    id: 2,
    name: "Curl Defining Cream",
    type: "Styling Cream",
    price: 12.50,
    isOrganic: true,
    description: "Defines curls and reduces frizz with natural ingredients.",
    imageUrl: "assets/images/product 2.jpg"
  },
  {
    id: 3,
    name: "Tea Tree Scalp Treatment",
    type: "Scalp Care",
    price: 18.75,
    isOrganic: false,
    description: "Soothing scalp oil with tea tree and peppermint extracts.",
    imageUrl: "assets/images/product 3.jpg"
  },
  {
    id: 4,
    name: "Silk Press Serum",
    type: "Heat Protectant",
    price: 14.99,
    isOrganic: false,
    description: "Lightweight serum for smooth, frizz-free silk presses.",
    imageUrl: "assets/images/product 4.jpg"
  },
  {
    id: 5,
    name: "Aloe Vera Leave-In Conditioner",
    type: "Conditioner",
    price: 11.25,
    isOrganic: true,
    description: "Moisturizing leave-in for soft and manageable hair.",
    imageUrl: "assets/images/product 5.jpg"
  },
  {
    id: 6,
    name: "Black Castor Oil",
    type: "Oil",
    price: 9.99,
    isOrganic: true,
    description: "Strengthens hair and promotes growth with natural castor oil.",
    imageUrl: "assets/images/product 6.jpg"
  }
];

