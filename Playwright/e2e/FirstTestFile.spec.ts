import { expect, test } from '@playwright/test';

/// test --- Test annotation , Browser, Browser Context, Page
/// driver --- driver object interacts with the page elements
// driver.findElement(by.css())

test('This is the first test',async({page})=>{
    await page.goto("https://playwright.dev/");
    let gettingStarted = page.locator('.getStarted_Sjon')
    await gettingStarted.click();
    expect(page.locator('.theme-doc-markdown.markdown h1')).toHaveText("Installation");
})

// test('this is the second test',async({page})=>{
//     await page.goto("https://www.google.com");
// })