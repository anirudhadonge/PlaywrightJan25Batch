/// describe block : Grouping of test.
/// Before All
/// Before Each
/// After Each
/// AfterAll
/// step()
/// slow()  --- 3 mins  *3 = 9 mins
/// only
/// skip

import { test, expect } from "@playwright/test";

test.describe("The is a block for demo describe", async () => {
  // test.beforeAll('This is a before block',async()=>{
  //     console.log('This is before all');
  //    })

  test.beforeEach("this is before each method", async ({page}) => {
    await test.step('Navigating to HeroKuapp App',async ()=>{
        await page.goto('https://the-internet.herokuapp.com/');
    })       
  });

  test("Drag Dropping ", async ({ page }) => {
   test.slow();
    await test.step('Click on Drag and Drop link',async()=>{
        await page.locator('[href="/drag_and_drop"]').click();
    })
    
    await test.step('Perform Drag and Drop Action',async()=>{
        //await page.waitForLoadState("networkidle");
        // 1. Element that need to dragged
        // 2. Where it need to be dropped.
        await page.locator("#column-a").dragTo(page.locator("#column-b"));
        //const locator = page.locator("#column-b");
        //await page.waitForSelector('#column-b',{state:"visible"});
    })

    await test.step('Validate the drag and drop action',async()=>{
        await expect(page.locator("#column-b")).toHaveText("A");
    })
  });

  test.skip("New Page Test", async ({ page, context }) => {
   
    await page.locator('[href="/windows"]').click();
    const NewPageEvent = context.waitForEvent("page");
    await page.locator("[href='/windows/new']").click();
    const newPage = await NewPageEvent;
    await expect(newPage.locator("h3")).toHaveText("New Window");
  });

  test.afterEach("this is after each method", async () => {
    console.log("This is after each method.");
  });

  // test.afterAll('This is after all method',async()=>{
  //     console.log('After All method executed.');
  // })
});

// test.describe('The is a block for demo describe block2',async()=>{

//     test('This is test1',async()=>{
//         console.log('This is test 1');
//     })

//     test('This is test2',async()=>{
//         console.log('This is test 2');
//     })

// })
