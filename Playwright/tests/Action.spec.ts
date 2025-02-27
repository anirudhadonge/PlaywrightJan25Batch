import { expect, test } from '@playwright/test';
//import { HomePage } from '../PageModel/HomePage';
/**?
 * Fill 
 * Presequentially
 */
// test('Clicking Action demo',async ({page})=>{
//     let homePage = new HomePage(page);
//     await homePage.navigateToUrl("https://the-internet.herokuapp.com/");
//     await homePage.clickOnElement("[href='/login']");
//     let userNameInput = page.locator('#username');
//     await userNameInput.pressSequentially("tomsmith",{delay:3000});
// })

// test('Selection of Options from Dropdown',async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/dropdown");
//     let dropdown = page.locator('select#dropdown');
//     await dropdown.selectOption({index:1});
// })

/// Checkboxes and radio buttons

test("Interacting with CheckBoxes",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/checkboxes");    
    let checkbox1 = page.locator("#checkboxes input").nth(0);
    await checkbox1.uncheck();
    expect(await checkbox1.isChecked()).toBeTruthy();
    let checkbox2 = page.locator("#checkboxes input").nth(1);
    await checkbox2.uncheck();
})

test.only("Interacting with CheckBoxes randomly",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/checkboxes");    
    let count = await page.locator("#checkboxes input").count();
    let randomNum = Math.round((count-1)*Math.random())   //Math.random --- 0 to 1 = decimal number  max and min = max-min
    let checkbox1 = page.locator("#checkboxes input").nth(randomNum);
    await checkbox1.check();
    expect(await checkbox1.isChecked()).toBeTruthy();   
})
