import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly shoppingCartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    // ตัวอย่าง Locator สำหรับหัวข้อหน้าสินค้า และไอคอนตะกร้าสินค้าใน Saucedemo
    this.productTitle = page.locator('.title');
    this.shoppingCartIcon = page.locator('.shopping_cart_link');
  }

  // ฟังก์ชันตรวจสอบว่าเข้ามาถึงหน้าสินค้าจริงไหม
  async verifyOnInventoryPage() {
    await expect(this.productTitle).toHaveText('Products');
  }

  // ฟังก์ชันกดเข้าไปดูตะกร้าสินค้า
  async goToCart() {
    await this.shoppingCartIcon.click();
  }
}