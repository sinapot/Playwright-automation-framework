const { test, expect } =  require('@playwright/test');

test.skip('visual test of homepage', async ({page}) => {
    await page.goto('/')
    //this tests the whole page of the base URL
    //this always passes unless there are changes in the base URL
    await expect(page).toHaveScreenshot();
})

test.skip('always failing Visual test', async ({page}) => {
    await page.goto('https://time.is/')
    //this tests the whole page of /time.is/
    //this always FAILS because the time displayed is always
    await expect(page).toHaveScreenshot();
})
