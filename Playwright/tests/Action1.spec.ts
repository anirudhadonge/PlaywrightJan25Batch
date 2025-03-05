import {test,expect} from '@playwright/test'

// test("Download File Test",async ({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/download");
//     const download = page.waitForEvent('download');
//     await page.locator("//a[text()='some-file.txt']").click();
//     const downloadFile = await download;
//     await downloadFile.saveAs("C:/UploadFiles/"+downloadFile.suggestedFilename());
// })


// test("Handling Javascript Popups",async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
//     //let alertBtn = "[onclick='jsAlert()']"; //css locator //button[@onclick='jsAlert()']
//     ///let alertBtn = "[onclick='jsConfirm()']";
//     let alertBtn ="[onclick='jsPrompt()']"
//     await handleJsPop(page,alertBtn,"this is a demo")
//     //await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
//     await expect(page.locator("#result")).toHaveText("You entered: this is a demo");
// })

// async function handleJsPop(page,locator,message){
//     page.on('dialog',(dialog)=>{
//         console.log(dialog.message());
//         dialog.accept(message);
//     })
//     await page.locator(locator).click();
// }

// test('Hover test',async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/hovers");
//     await page.locator("[alt='User Avatar']").nth(0).hover();
//     expect(page.locator("h5").nth(0)).toHaveText("name: user1");
// })

// test("Handling New Page",async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/windows");
//     const newPage = page.waitForEvent('page');
//     await page.locator("[href='/windows/new']").click();
// })

/*Fixtures : 
1 Browser --- Help you in invoking the browser 
2.Browser Context --- Profile of the user or the setting of the browser
3.Page
Brower ---> Browser Context ---> page



*/


// test("New Page Test",async({page,context})=>{
//     await page.goto("https://the-internet.herokuapp.com/windows");
//     const NewPageEvent = context.waitForEvent('page');
//     await page.locator("[href='/windows/new']").click();
//     const newPage = await NewPageEvent;
//     await expect(newPage.locator("h3")).toHaveText("New Window");
// })


// test("handeling Authencation window",async({browser})=>{
//     const context = await browser.newContext({
//         httpCredentials:{
//             username:'admin',
//             password:'admin'
//         }
//     })
//     const page = await context.newPage();
//     await page.goto("https://the-internet.herokuapp.com/");
//     await page.locator("[href='/basic_auth']").click();
//     await expect(page.locator(".example p")).toHaveText('Congratulations! You must have the proper credentials.')
// })

// test("try to handle Authencation window with default context",async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/");
//     await page.locator("[href='/basic_auth']").click();
//     await expect(page.locator(".example p")).toHaveText('Congratulations! You must have the proper credentials.')
// })

test('Drag Dropping ',async({page})=>{
    
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

    // 1. Element that need to dragged 
    // 2. Where it need to be dropped.
    await page.locator("#column-a").dragTo(page.locator('#column-b'));
    const locator = await page.locator('#column-b');
    //await page.waitForSelector('#column-b',{state:"visible"});
    await page.waitForLoadState("networkidle");
    await expect(page.locator('#column-b')).toHaveText('A');
})