import { Injectable } from '@angular/core';
import {
  iceCoffees,
  icecreams,
  milkshakes,
  smoothies,
} from '../data/products';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getMilkshakes(): IProduct[] {
    return milkshakes;
  }

  getIcecreams(): IProduct[] {
    return icecreams;
  }

  getSmoothies(): IProduct[] {
    return smoothies;
  }

  getIceCoffees(): IProduct[] {
    return iceCoffees;
  }
}
