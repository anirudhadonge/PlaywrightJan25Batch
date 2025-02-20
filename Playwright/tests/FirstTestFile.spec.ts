import { test } from '@playwright/test';

/// test --- Test annotation , Browser, Browser Context, Page
/// driver --- driver object interacts with the page elements

test('This is the first test',async({page})=>{
    await page.goto("https://playwright.dev/");
    let gettingStarted = page.locator('.getStarted_Sjon')
    await gettingStarted.click();
})

// test('this is the second test',async({page})=>{
//     await page.goto("https://www.google.com");
// })