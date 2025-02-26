import { test } from '@playwright/test';
/**?
 * Fill 
 * Presequentially
 */
test('Clicking Action demo',async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    let loginForm = page.locator("[href='/login']");
    await loginForm.click();
    let userNameInput = page.locator('#username');
    await userNameInput.pressSequentially("tomsmith",{delay:3000});
})

test.only('Selection of Options from Dropdown',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    let dropdown = page.locator('select#dropdown');
    await dropdown.selectOption({index:1});
})