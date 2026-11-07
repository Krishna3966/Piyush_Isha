import { test, expect, Locator } from '@playwright/test';
import { NavigationPage } from '../page-objects/NavigationPage.js';
import { FormLayoutsPage } from '../page-objects/FormLayoutsPage.js';

test.beforeEach(async ({page}) => {
    await page.goto('https://playground.bondaracademy.com')
})

test('navigate to Form Layouts page', async ({ page }) => {
    const navigateTo = new NavigationPage(page)     //heap memory
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test('Fill the inline form and use the grid form', async ({ page }) => {
    const navigateTo = new NavigationPage(page)     //heap memory
    const onFormLayoutsPage = new FormLayoutsPage(page) 
    
    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridForm('test@gmail.com', '123456', 'Option 1')
    await onFormLayoutsPage.submitInlineForm('John Smith', 'john.smith@gmail.com', false)
})

//Create a new class called `DatePickerPage`. 
//Inside this class, create a method and fill the date. 

