import { expect, test } from '@playwright/test';
//import { HomePage } from '../PageModel/HomePage';
/**?
 * Fill 
 * Presequentially
 */


// test.only("Interacting with CheckBoxes randomly",async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/checkboxes");    
//     let count = await page.locator("#checkboxes input").count();
//     let randomNum = Math.round((count-1)*Math.random())   //Math.random --- 0 to 1 = decimal number  max and min = max-min
//     let checkbox1 = page.locator("#checkboxes input").nth(randomNum);
//     await checkbox1.check();
//     expect(await checkbox1.isChecked()).toBeTruthy();   
// })

// test('Clicking Action demo',async ({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/");
//     await page.locator("[href='/login']").click();
//     let userNameInput = page.locator('#username');
//     await userNameInput.pressSequentially("tomsmith",{delay:100});
//     let passwordInput = page.locator('#password');
//     await passwordInput.pressSequentially("SuperSecretPassword!",{delay:100});
//     await page.locator('.radius').click();
//     await page.pause();
// })

// test('Upload file test',async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/upload");
//     let uploadBtn = page.locator('#file-upload');
//     await uploadBtn.setInputFiles(['C:/UploadFiles/1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg',
//         'C:/UploadFiles/downloadFile.txt']
//     );
//     await page.locator('#file-submit').click();
//     //await page.pause();
//     })

// test('Working with Iframe',async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/iframe");
//     let frameLocator = page.frameLocator('iframe#mce_0_ifr');
//     await expect(frameLocator.locator('#tinymce p')).toBeVisible();
//     await expect(page.locator('.example h3')).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
// })

// test("This test demos the Playwright alert dialog Actions",async ({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
//     let alertBtn = "[onclick='jsAlert()']";
//     let confirmBtn = "[onclick='jsConfirm()']";
//     let jsPromptBtn = "[onclick='jsPrompt()']";
//     page.on('dialog',(dialog)=>{
//         console.log(dialog.message());
//         dialog.accept("This is a demo");
//     });
//     await page.locator(jsPromptBtn).click();
//     })


// test("Download file",async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/download");
//     // Start waiting for download before clicking. Note no await.
// const downloadPromise = page.waitForEvent('download');
// await page.getByText('targetScreenshot (3).png').click();
// const download = await downloadPromise;

// // Wait for the download process to complete and save the downloaded file somewhere.
// await download.saveAs("C:/UploadFiles/" + download.suggestedFilename());
// })

// test('Multiple Windows test',async({page,context})=>{
//     await page.goto("https://the-internet.herokuapp.com/windows");
//     const pagePromise = context.waitForEvent('page');
//     await page.locator("[href='/windows/new']").click();
//     const newPage = await pagePromise;
//     await expect(newPage.locator('h3')).toHaveText("New Window");
//     await newPage.close();
//     await expect(page.locator("h3")).toHaveText("Opening a new window");
// })


// test("Basic Authenciation",async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/");
//     await page.locator("[href='/basic_auth']").click();
//     await expect(page.locator("#content p")).toHaveText("Congratulations! You must have the proper credentials.")
// })

// test("Basic Authenciation",async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
//     await  page.locator('#column-a').dragTo(page.locator('#column-b'));
//     // await page.screenshot();
//     // await page.locator('#column-a').hover();
//     // await page.mouse.down();
//     // await page.locator('#column-b').hover();
//     // await page.mouse.up();
//     await expect(page.locator("#column-b")).toHaveText('A');
// })


// test('Validate Disability of Textbox ',async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
//     const textBox = page.locator("input[type='text']");
//     await expect(textBox).toBeDisabled();
//     await page.locator("[onclick='swapInput()']").click();
//     await expect(textBox).toBeEnabled();
// })

// test('Validate Visiblity of element',async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
//     const checkbox = page.locator("#checkbox input[type='checkbox']");
//     await expect(checkbox).toBeVisible();
//     await page.locator("button[onclick='swapCheckbox()']").click();
//     await expect(checkbox).toBeHidden();
//     await page.waitForTimeout(10000);
//     const message = page.locator("p#message");
//     //await expect(message).toContainText("It's gon");
//     expect(message.innerText()).toContain("It's gon") // Partial Text Assert.Equals(value1,value2,"")
//     //await expect(page.locator("p#message")).toHaveText("It's gon") /// whole text is getting validated
// })

//test.describe /// Grouping of the test can be done through describe block.

test.describe('Test test belongs to Fill textbox, Checkbox, dropdown',async()=>{
    test.beforeEach('Navigating to the url',async({page})=>{
       await page.goto('https://the-internet.herokuapp.com/');
    })
    test('Clicking Action demo',async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("[href='/login']").click();
    let userNameInput = page.locator('#username');
    await expect(userNameInput).toBeAttached();
    await userNameInput.pressSequentially("tomsmith",{delay:500});
})

test('Selection of Options from Dropdown',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    let dropdown = page.locator('select#dropdown');
    await dropdown.selectOption({index:1});
})

// Checkboxes and radio buttons

test("Interacting with CheckBoxes",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/checkboxes");    
    let checkbox1 = page.locator("#checkboxes input").nth(0);
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    let checkbox2 = page.locator("#checkboxes input").nth(1);
    await checkbox2.uncheck();
})
})
