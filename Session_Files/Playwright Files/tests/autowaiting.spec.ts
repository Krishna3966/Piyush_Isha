import { test, expect } from '@playwright/test';

//The auto-waiting feature not only works for actions, but it works even for assertions.
test('GET Tags API', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')

    //Assertions - Auto waiting is applicable. 
    //The auto-wait timeout is 5 seconds. 
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/')
    await expect(page.getByText('Welcome to our store1')).toBeVisible({timeout: 4 * 1000})

    //Actions - Auto waiting is applicable. 
    //The auto wait timeout is 30 seconds. 
    await page.locator('#small-searchterms').fill('laptop')
    await page.getByRole('button', {name: 'Search'}).click()
})