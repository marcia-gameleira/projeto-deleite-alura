import { TestBed } from '@angular/core/testing';

import {
  iceCoffees,
  icecreams,
  milkshakes,
  smoothies,
} from '../data/products';
import { ProductsService } from './products-service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all milkshakes', () => {
    expect(service.getMilkshakes()).toEqual(milkshakes);
  });

  it('should return all ice creams', () => {
    expect(service.getIcecreams()).toEqual(icecreams);
  });

  it('should return all smoothies', () => {
    expect(service.getSmoothies()).toEqual(smoothies);
  });

  it('should return all iced coffees', () => {
    expect(service.getIceCoffees()).toEqual(iceCoffees);
  });
});
