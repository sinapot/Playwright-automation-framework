// @ts-check
const { test, expect } = require('@playwright/test');

test('iFrame testing', async ({ page }) => {
  
    //test website with iFrames
  await page.goto("https://demoqa.com/frames");

    //assigning the iframe Frame 1
    const header1 = await page.frameLocator("#frame1").locator("h1");
    //getting the text of the element in the frame
    const headertext = await header1.innerText()
    
    await expect(headertext).toEqual("This is a sample page")

});
