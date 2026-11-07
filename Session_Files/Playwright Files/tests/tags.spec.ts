/*
Suppose you have 200 tests.

Some test cases are critical, some test cases are long,
some test cases are unstable, and some test cases are for quick verification.

Suppose we want to run only smoke test cases, or regression test cases, or sanity test cases. 

Tags are labels that we attach to test cases so that we can run a specific group of tests. 
*/

import { test, expect, Locator } from '@playwright/test';

//@smoke is just a label
//There is no limit to how many tags you can add to a test case. 
// test('@smoke Test1', async ({ page }) => {
//     await page.goto('https://google.com/')
// })

// test('@smoke @regression Test2', async ({ page }) => {
//     await page.goto('https://facebook.com/')
// })

//Run this command to run only the smoke test. 
//`npx playwright test --grep smoke` 

//Playwright provides a dedicated way to define the tags. 

test('Test1', {tag: '@smoke'},async ({ page }) => {
    await page.goto('https://google.com/')
})

test('Test2', {tag: ['@smoke', '@regression']},async ({ page }) => {
    await page.goto('https://facebook.com/')
})