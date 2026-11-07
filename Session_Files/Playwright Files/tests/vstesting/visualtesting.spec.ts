import { test, expect } from '@playwright/test';

test('visual test', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')
    await page.waitForTimeout(5000)
    await expect(page).toHaveScreenshot('homepage.png')
})