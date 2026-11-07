
import { test, expect, Locator } from '@playwright/test';
// import { loginTestData } from '../testData/data';
import loginTestData from '../testData/data.json' with {type: 'json'}

test.describe('Login Tests', () => {
    for (const {email, password, validity} of loginTestData) {
        // const email = item[0]
        // const password = item[1]
        // const validity = item[2]

        const title = `${email || '<empty email>'} | ${password || '<empty password>'} -> ${validity}`
        test(title, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/login')

            //Fill the login form. 
            await page.locator('#Email').fill(email)
            await page.locator('#Password').fill(password)
            await page.getByRole('button', {name: 'Log in'}).click()

            if(validity.toLowerCase() === 'valid'){
                const logoutLink = page.getByRole('link', {name: 'Log out'})
                await expect(logoutLink).toBeVisible()
            } else {
                //An error should happen. 
                const errorMessage = page.locator('div.validation-summary-errors')
                await expect(errorMessage).toBeVisible()
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login')
            }
        })
    }
})