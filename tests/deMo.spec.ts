// import { test, expect } from "@playwright/test";
import { logInPage } from "../pages/login.page";
import { test } from "../fixture/fixture.page";

test.describe("Login Feature", () => {
  test("Page_Login", async ({logInPage}) => {   
    await logInPage.goto();
    await logInPage.login("standard_user", "secret_sauce");
    await logInPage.clickLogin();
    await logInPage.loginSuccess();
  });
  test("Login_error", async ({ page }) => {
    await loginPage.goto();
    await loginPage.login("", "");
    await loginPage.clickLogin();
    await loginPage.verifyErrorMessage("Epic sadface: Username is required");
    await loginPage.ErrorUrl();
    
    console.log("verifyErrorMessage");
  });
});
