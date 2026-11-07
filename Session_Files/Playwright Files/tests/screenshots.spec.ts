/*
We can capture the screenshot in three ways:
1. Whatever is currently visible on the page, but not the full page
2. Capture the full-page screenshot
3. Capture the screenshot of a specific area
*/

import { test, expect, Locator } from '@playwright/test';

test('screenshots', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')

    const timestamp = Date.now()

    //If I run this test case again, Playwright will override the screenshot if present. 
    await page.screenshot({
        path: `screenshots/homepage${timestamp}.png`,
        fullPage: true
    })

    const logo: Locator = page.getByAltText('Tricentis Demo Web Shop')
    await logo.screenshot({
        path: `screenshots/logo${timestamp}.png`
    })

})

//TODO - Capture the screenshot of only the featured products section. 

//We can even capture the screenshots automatically using Playwright by using the config file. 