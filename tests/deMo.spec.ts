import { test, expect } from "@playwright/test";
import { logInPage } from "../pages/login.page";

test.describe("Login Feature", () => {
  test("Page_Login", async ({ page }) => {
    const loginPage = new logInPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.loginSuccess();
  });
  test("Login_error", async ({ page }) => {
    const loginPage = new logInPage(page);
    await loginPage.goto();
    await loginPage.login("", "");
    await loginPage.verifyErrorMessage("Epic sadface: Username is required");

    console.log("verifyErrorMessage");
  });
});
