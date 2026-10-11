// import { test, expect } from "@playwright/test";
import { logInPage } from "../pages/login.page";
import { test, expect } from '../fixture/PageObjects';
import { InventoryPage } from "../pages/inventory.page";

  
test.describe("Login Feature", () => {

  // ล็อกอินสำเร็จด้วย User ปกติ (standard_user)
  test("Page_Login", async ({logInPage}) => {   
    await logInPage.goto();
    await logInPage.fillUser("standard_user", "secret_sauce");
    await logInPage.clickLogin();
    await logInPage.loginSuccess();
  });
  // ล็อกอินไม่สำเร็จด้วย User ที่ถูกบล็อก (locked_out_user)
     test("locked_out", async ({ logInPage}) => {
  await logInPage.goto();
  await logInPage.fillUser("locked_out_user","secret_sauce");
  await logInPage.clickLogin();
  await logInPage.verifyErrorMessage("Epic sadface: Sorry, this user has been locked out.");
  await logInPage.ErrorUrl();
   });
  // ล็อกอินไม่สำเร็จเมื่อปล่อยว่างทุกช่อง
  test("LoginEmteyFill", async ({ logInPage}) => {
    await logInPage.goto();
    await logInPage.fillUser("", "");
    await logInPage.clickLogin();
    await logInPage.verifyErrorMessage("Epic sadface: Username is required");
    await logInPage.ErrorUrl();
  });
  // ล็อกอินไม่สำเร็จเมื่อไม่ใส่รหัสผ่าน
   test("LoginNotFillPasword", async ({ logInPage}) => {
    await logInPage.goto();
    await logInPage.fillUser("standard_user", "");
    await logInPage.clickLogin();
    await logInPage.verifyErrorMessage("Epic sadface: Password is required");
    await logInPage.ErrorUrl();
  });

  test.describe("Inventory",() => {

  // ตรวจสอบการเรียงลำดับสินค้าจากราคาต่ำไปสูง (Price (low to high))
       test("Price (low to high)", async ({logInPage,InventoryPage}) => {
      await logInPage.goto();
       await logInPage.fillUser("standard_user", "secret_sauce");
       await logInPage.clickLogin();
       await logInPage.loginSuccess();
       await InventoryPage.filTerLowToHigh("lohi");
      
     
  });
  // กดเพิ่มสินค้าใส่ตะกร้าจากหน้าสินค้า (Add to Cart)
test("(Add to Cart)", async ({logInPage,InventoryPage}) => {
      await logInPage.goto();
       await logInPage.fillUser("standard_user", "secret_sauce");
       await logInPage.clickLogin();
       await logInPage.loginSuccess();
       await InventoryPage.filTerLowToHigh("lohi");
       await InventoryPage.addItem();
     
  });

  }
)    
  });