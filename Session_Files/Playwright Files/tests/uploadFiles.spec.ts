/*

<input accept=".jpg, .jpeg, .png" type="file" id="imgInp">

In this HTML, we are looking for two things:
1. The HTML tag has to be `input`.
2. The `type` attribute has to be `file`

In that case, you can easily use an inbuilt method in Playwright called `setInputFiles`. 
*/

import { test, expect, Locator } from '@playwright/test';

//Copy Path -> /Users/piyushgupta/Documents/Playwright Training/Isha Training/playwright-weekend-aug-learning/uploadFiles/JPG_100kB.jpg
//Relative Path -> uploadFiles/JPG_100kB.jpg
//In order to upload a single file, just provide the file path as a string argument. 
test('Upload single file', async ({ page }) => {
    await page.goto('https://recruiter.foundit.in/create-profile-page/')

    await page.locator('#img-icon').click()

    await page.locator('#imgInp').setInputFiles('uploadFiles/JPG_100kB.jpg')
})

//TODO
//In order to upload multiple files, instead of providing the
// file path as a string argument, you provide an array of strings. 