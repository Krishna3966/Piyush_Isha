import { test, expect, Locator, chromium } from '@playwright/test'

//Multi-tab workflow/multi user workflow

test('create multiple pages inside a session', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.pause()
})

//Multi user workflow
//Within the same browser, I'm launching two isolated sessions. 
test('Handle multiple pages1', async ({browser}) => {
    // const browser = await chromium.launch()

    const context1 = await browser.newContext()     //Isolated session number 1 
    const page1 = await context1.newPage()
    await page1.goto('https://conduit.bondaracademy.com/login')
    await page1.getByPlaceholder('Email').fill('piyushtest@test.com')
    await page1.getByPlaceholder('Password').fill('123456')
    await page1.getByRole('button', {name: 'Sign in'}).click()

    const context2 = await browser.newContext()     //Isolated session number 2 
    const page2 = await context2.newPage()
    await page2.goto('https://conduit.bondaracademy.com/login')

    await page1.pause()
})

//Multi tab scenario
//Here, I'm using the browser fixture because I want more control
// over the browser sessions and pages or tabs. 
test('Handle multiple pages2', async ({browser}) => {
    // const browser = await chromium.launch()

    const context = await browser.newContext()

    const page1 = await context.newPage()
    await page1.goto('https://conduit.bondaracademy.com/login')
    await page1.getByPlaceholder('Email').fill('piyushtest@test.com')
    await page1.getByPlaceholder('Password').fill('123456')
    await page1.getByRole('button', {name: 'Sign in'}).click()

    const page2 = await context.newPage()
    await page2.goto('https://conduit.bondaracademy.com/login')

    await page1.pause()
})

test('Handle OrangeHRM multiple tabs', async ({browser}) => {
    const context = await browser.newContext()

    const page1 = await context.newPage()
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    //I'm expecting a new page/new tab to open soon, so please start listening.
    //Make sure you're not using `await`. 
    const pagePromise = context.waitForEvent('page');
    await page1.getByRole('link', {name: 'OrangeHRM, Inc'}).click()

    //Now we are waiting for this new tab to finish opening, and we
    // are capturing it in a newPage. 
    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')

    //At this point, the newPage has the focus, or, in simple words, the new page is the active tab.

    await page1.getByPlaceholder('Username').fill('Piyush Gupta')
    await page1.bringToFront()

    await page1.waitForTimeout(10000)
})