import {test as baseTest} from '@playwright/test'
import { logInPage } from '../pages/login.page'
import { InventoryPage } from '../pages/inventory.page'
import { cartPage } from '../pages/cart.page';

type MyFixtures = {
    logInPage: logInPage;
    InventoryPage : InventoryPage;
    cartPage : cartPage;
};
export const test = baseTest.extend<MyFixtures>({
  logInPage: async ({ page }, use) => {
    const loginPage = new logInPage(page);
    await use(loginPage);
  },
  InventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  cartPage: async ({ page }, use) => {
    await use(new cartPage(page));
  },


});

export { expect } from '@playwright/test';