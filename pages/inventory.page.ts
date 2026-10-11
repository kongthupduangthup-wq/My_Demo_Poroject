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
    // ตัวอย่าง Locator สำหรับหัวข้อหน้าสินค้า และไอคอนตะกร้าสินค้าใน Saucedemo
    this.productTitle = page.locator('.title');
    this.shoppingCartIcon = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productList = page.locator('[data-test="inventory-container"]')
    
  }

  // ฟังก์ชันตรวจสอบว่าเข้ามาถึงหน้าสินค้าจริงไหม
  async verifyOnInventoryPage() {
    await expect(this.productTitle).toHaveText('Products');
  }

  // ฟังก์ชันกดเข้าไปดูตะกร้าสินค้า
  async goToCart() {
    await this.shoppingCartIcon.click();
  }

async filTerLowToHigh(optionValue: string) {
      await this.sortDropdown.selectOption(optionValue);
    }
    
   async addItem(){
    await this.page.locator('[data-test="inventory-item"]').nth(1).getByRole('button', {name :"Add to cart"}).click();
   }

async getItemPrices(): Promise<number[]> {
    const priceElements = await this.page.locator('.inventory_item_price').allTextContents();
    const prices = priceElements.map(price => parseFloat(price.replace('$', '')));
    return prices;
  }
}