import { Page } from "@playwright/test";

export class BasePage{
    page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async goto(url:string){
        await this.page.goto(url);
    }


    async clickOnElement(locator:string){
        await this.page.locator(locator).click();
    }

    async fillTextBox(locator:string,data:string){
        await this.page.locator(locator).fill(data);
    }
}