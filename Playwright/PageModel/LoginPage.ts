import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage{

    userNameInput ="[placeholder='Username']";
    passwordInput ="[placeholder='Password']";
    loginBtn ="//span[text()=' Login ']//parent::button";
    constructor(page:Page){
        super(page);
    }

    async loginToApp(username:string,password:string){
        await this.fillTextBox(this.userNameInput,username);
        await this.fillTextBox(this.passwordInput,password);
        await this.clickOnElement(this.loginBtn);
    }

}