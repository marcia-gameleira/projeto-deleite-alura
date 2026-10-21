import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home-page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show added products in the cart and clear them', () => {
    const productCard = fixture.nativeElement.querySelector('app-product-card');
    const addButton = productCard.querySelector('.btn-add') as HTMLButtonElement;

    addButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.cart-list').textContent).toContain(
      component.milkshakes[0].title,
    );
    expect(component.cartItens()).toBe(1);

    fixture.nativeElement.querySelector('.btn-empty-cart').click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.cart-list')).toBeNull();
    expect(component.cartItens()).toBe(0);
  });
});
