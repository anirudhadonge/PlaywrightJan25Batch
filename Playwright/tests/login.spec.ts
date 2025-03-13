import {test,expect} from '@playwright/test'
import { HomePage } from '../PageModel/HomePage.ts'
import { LoginPage } from '../PageModel/LoginPage.ts'

test('env Test',async({page})=>{
   
    const homePage = new HomePage(page);
    await homePage.goto(process.env.URL);
    await homePage.ClickOnLoginBtn();
    const loginPage = new LoginPage(page);
    await loginPage.loginToApp(process.env.USERNAME,process.env.PASSWORD);

})

