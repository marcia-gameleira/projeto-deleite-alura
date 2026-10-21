import { milkshakes, icecreams, smoothies, iceCoffees } from './../../data/products';
import { Component, computed, inject, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { IProduct } from '../../interfaces/IProduct';
import { DecimalPipe } from '@angular/common';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard, DecimalPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  private productService = inject(ProductsService);

  milkshakes: IProduct[] = this.productService.getMilkshakes();
  icecreams: IProduct[] = this.productService.getIcecreams();
  smoothies: IProduct[] = this.productService.getSmoothies();
  iceCoffees: IProduct[] = this.productService.getIceCoffees();

  cartProducts = signal<IProduct[]>([]);
  cartItens = computed(() => this.cartProducts().length);
  showCartAlert = computed(() => this.cartItens() > 0);
  totalValueCart = computed(() =>
    this.cartProducts().reduce((total, product) => total + product.price, 0),
  );

  addProduct(product: IProduct) {
    this.cartProducts.update(products => [...products, product]);
  }

  clearCart() {
    this.cartProducts.set([]);
  }

}
