/*
Shadow host is the HTML element that contains or hosts a shadow DOM.

In the case of Playwright, it has a concept called `Auto piercing`. 
Auto piercing means even if there are n number of shadow DOMs,
Playwright doesn't care. Playwright can automatically pierce
through each and every shadow DOM, and it can directly interact
with the element as if there was no shadow DOM. 

*/

import { test, expect, Locator } from '@playwright/test';

//Nested shadow DOM 
//Playwright automatically continues searching through every open shadow DOM.
//Page -> Shadow DOM1 -> Nested DOM -> Pizza element

/*
Global Settings - This will take priority when project-level settings or test case-level settings are not defined. 
Project Level settings - This has the second-highest priority. 
Test case level setting - This has the highest priority. 

*/
test('Shadow DOM1', async ({ page }) => {
    // test.setTimeout(8000)
    await page.goto('https://selectorshub.com/iframe-in-shadow-dom/')

    await page.locator('#pizza1').fill('Veggie Delight')
})

//An iframe is one document inside another document.
//You cannot interact with any element inside an iframe directly, whether it is Selenium or Playwright.
//We have to switch into the iframe first, and then only can we interact with the inside element. 
//In order to switch into the iframe, we have to find the iframe first. 

//Always handle the iframe first. frameLocator()
//Then let Playwright automatically handle the shadow DOM. 

//It is an HTML rule that no two elements on a page can have the same ID. 

//Page -> iFrame -> Shadow DOM -> Tea element
test('Shadow DOM2', async ({ page }) => {
    await page.goto('https://selectorshub.com/shadow-dom-in-iframe/')

    // await page.locator('#tea').fill('Masala Tea')
    //1. Locate the iframe. 
    //2. Auto-pierce the shadow DOM and directly find the Tea element.
    // await page.frameLocator('#pact').first().locator('#tea').fill('Masala Tea')
    await page.frameLocator('[data-element_type="container"] #pact').locator('#tea').fill('Masala Tea')

})

//TODO - Inside the practise websites folder, we have an HTML file,
// closed-shadow-dom.html. Run it with the live server and try automating the text box. 