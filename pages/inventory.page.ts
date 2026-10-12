import { Page, Locator, expect } from '@playwright/test';
import { logInPage } from './login.page';

export class InventoryPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly productList: Locator;
  readonly shoppingCartIcon: Locator;
  readonly sortDropdown : Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('.title');
    this.shoppingCartIcon = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productList = page.locator('[data-test="inventory-container"]')
    
  }


  async verifyOnInventoryPage() {
    await expect(this.productTitle).toHaveText('Products');
  }


  async goToCart() {
    await this.shoppingCartIcon.click();
  }

async selectFiter(optionValue: string) {
      await this.sortDropdown.selectOption(optionValue);
    }
    
   async addItem(){
    await this.page.locator('[data-test="inventory-item"]').nth(0).getByRole('button', {name :"Add to cart"}).click();
    await expect (this.page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
    await expect (this.page.locator('[data-test="shopping-cart-badge"]')).toContainText("1");

    
   }

// async getItemPrices(): Promise<number[]> {
//     const priceElements = await this.page.locator('.inventory_item_price').allTextContents();
//     const prices = priceElements.map(price => parseFloat(price.replace('$', '')));
//     return prices;
  
//   }

  async clickShoppingCartIcon(){
    await this.shoppingCartIcon.click();
  }

}