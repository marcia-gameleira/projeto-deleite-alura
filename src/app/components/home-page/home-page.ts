import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { IProduct } from '../../interfaces/IProduct';
import {
  iceCoffees as iceCoffeeProducts,
  icecreams as iceCreamProducts,
  milkshakes as milkshakeProducts,
  smoothies as smoothieProducts,
} from '../../data/products';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  milkshakes: IProduct[] = milkshakeProducts;
  icecreams: IProduct[] = iceCreamProducts;
  smoothies: IProduct[] = smoothieProducts;
  iceCoffees: IProduct[] = iceCoffeeProducts;
  
}

