import{Page, Locator, expect} from '@playwright/test';

export class logInPage{
    readonly  page: Page;
    readonly  usernameInput: Locator;
    readonly  passwordInput: Locator;
    readonly  loginButtom: Locator;
    readonly  errorMessage: Locator;
    baseUrl = 'https://www.saucedemo.com/';
  
  

    constructor(page:Page){
       this.page = page;
       this.usernameInput = page.getByRole('textbox', {name :"Username"});
       this.passwordInput = page.getByRole('textbox', {name :"Password"});
       this.loginButtom = page.getByRole('button', {name:'Login'})
       this.errorMessage = page.locator('[data-test="error"]');
    //    this.lockedOutUser = page.locator('[data-test="error-button"]')
    }
    
    async goto(){
        await this.page.goto(this.baseUrl);
        
    }
     async fillUser(username:string, password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
      
     }
     
     async clickLogin(){
        await this.loginButtom.click();
     }

     async loginSuccess(){
         await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
     }

    async verifyErrorMessage(expectedText: string) {
    await expect(this.errorMessage).toContainText(expectedText);
  }
    async ErrorUrl(){
        await  this.page.waitForURL('https://www.saucedemo.com/');
    }
   
}

