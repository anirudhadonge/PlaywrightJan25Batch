import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";



export class HomePage extends BasePage{

    loginBtnLocator:string ="//span[text()=' Login ']//parent::button";

    constructor(page:Page){
        super(page);
    }

    async ClickOnLoginBtn(){
        await this.clickOnElement(this.loginBtnLocator);
    }
}