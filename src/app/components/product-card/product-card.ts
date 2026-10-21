import { Component, input, output } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-card',
  imports: [],
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<IProduct>();
  addFunction = output<IProduct>();

  onTap() {
    this.addFunction.emit(this.product());
  }

}
