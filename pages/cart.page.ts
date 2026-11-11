import { Page, Locator, expect } from '@playwright/test';
import { logInPage } from './login.page';
import { InventoryPage } from './inventory.page';

export class cartPage {
        readonly page: Page;
        readonly continueShop: Locator;
        readonly remove : Locator
        readonly checkout :Locator;
      
    constructor(page: Page){
        this.page = page;
        this.continueShop = page.getByRole("button",{name: "Continue Shopping"});
        this.remove = page.getByRole("button",{name: "Remove"});
        this.checkout= page.getByRole("button",{name: "Checkout"});
        

    }
    async checkNameItem(expectedName: string| null){
       await expect (this.page.locator('button[name="remove-'+expectedName+'"]')).toBeVisible();    
    }
}
    

