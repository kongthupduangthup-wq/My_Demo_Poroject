import { Page, Locator, expect } from '@playwright/test';
import { logInPage } from './login.page';
import { InventoryPage } from './inventory.page';

export class cartPage {
        readonly page: Page;
        readonly cartItem : Locator;
        readonly continueShop: Locator;
        readonly remove : Locator
        readonly checkout :Locator;
      
    constructor(page: Page){
        this.page = page;
        this.cartItem = page.locator('[data-test="inventory-item"]');
        this.continueShop = page.getByRole("button",{name: "Continue Shopping"});
        this.remove = page.getByRole("button",{name: "Remove"});
        this.checkout= page.getByRole("button",{name: "Checkout"});
        

    }
    async checkNameItem(expectedName: string| null, expectedPrice: string | null){
        await expect (this.cartItem).toBeVisible();
        // const actualName = await this.cartItem.locator('.inventory_item_name').textContent();
        // const actualPrice = await this.cartItem.locator('.inventory_item_price').textContent();
        // expect(actualName).toEqual(expectedName);
        // expect(actualPrice).toEqual(expectedPrice);
        
    }
}
    
