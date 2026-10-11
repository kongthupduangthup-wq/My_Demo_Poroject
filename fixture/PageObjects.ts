import {test as baseTest} from '@playwright/test'
import { logInPage } from '../pages/login.page'
import { InventoryPage } from '../pages/inventory.page'

type MyFixtures = {
    logInPage: logInPage;
    InventoryPage : InventoryPage;
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

});

export { expect } from '@playwright/test';