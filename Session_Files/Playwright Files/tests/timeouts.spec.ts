/*
Test-level timeout means how long a single test is allowed
to run before Playwright stops it and marks it as failed.
By default, it is set to 30 seconds. It means every test
gets a maximum of 30 seconds to execute.
Beyond 30 seconds, Playwright will forcefully stop the
test case and mark it as failed. 

However, this timing can be changed. 

*/

import { test, expect } from '@playwright/test';

//The test-level setting will always override the global setting. 
//test.slow() - This tells Playwright that this test case is expected to take longer than usual.
//When you mark a test as slow, Playwright automatically triples the default timeout for the test. 
test('timeouts', async ({ page }) => {
    // test.setTimeout(30 * 1000)
    test.slow()

    await page.goto('https://demowebshop.tricentis.com/')

    await page.waitForTimeout(3000)
    await page.waitForTimeout(3000)
    await page.waitForTimeout(3000)
    await page.waitForTimeout(3000)
    await page.waitForTimeout(3000)
    await page.waitForTimeout(3000)
})