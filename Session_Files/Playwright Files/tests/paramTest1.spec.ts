/*
Parameterization simply means reusing the same logic with different inputs.
Instead of writing the same code or task again and again, we pass parameters to run it with different values. 

In testing, parameterization simply means running the same test scenario with multiple sets of data. 
*/

import { test, expect, Locator } from '@playwright/test';

const searchItems: string[] = ['laptop', 'Gift card', 'smartphone', 'monitor']

//This is not one test. These are four independent tests.
//This is the name of my group -> Search functionality tests

test.describe('Search functionality tests', () => {
    //This, beforeEach hook, is only applicable to the test cases inside this group. 
    test.beforeEach(async ({page}) => {
        await page.goto('https://demowebshop.tricentis.com')
    })
    for (const item of searchItems) {
        test(`search test ${item}`, async ({ page }) => {
            await page.locator('#small-searchterms').fill(item)
            await page.getByRole('button', { name: 'Search' }).click()

            await expect(page.locator('h2.product-title a').first()).toContainText(item, { ignoreCase: true })
        })
    }
})


