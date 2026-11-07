import { test, expect, Locator } from '@playwright/test';

//For the local applications, run the code using the terminal only. Don't use the VS Code play button. 
test('Mouse Hover action', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')

    // await page.getByRole('link', {name: 'Electronics'}).first().hover()
    await page.locator('div.header-menu')
              .getByRole('link', {name: 'Electronics'}).first().hover()

})

test('Mouse right click action', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    //For `div`, `span`, and `paragraph` elements, we cannot use `getByRole`.

    page.locator('.context-menu-one.btn.btn-neutral')       //CSS
    page.locator('//span[text()="right click me"]')         //XPath

    //Normal click
    await page.getByText('right click me', {exact: true}).click()

    //Right mouse click
    await page.getByText('right click me', {exact: true}).click({button: 'right'})
    // await page.locator('span', {hasText: 'right click me'}).click({button: 'right'})
})

test('Mouse double click action', async ({ page }) => {
    await page.goto('http://127.0.0.1:5501/practice-websites/automationpy.html')

    const field1Textbox: Locator = page.locator('#field1')
    const field2Textbox: Locator = page.locator('#field2')

    //Before the double click 
    await expect(field1Textbox).toHaveValue('Hello World!')
    await expect(field2Textbox).toBeEmpty()

    await page.getByRole('button', {name: 'Copy Text'}).dblclick()

    //After the double click 
    await expect(field1Textbox).toHaveValue('Hello World!')
    await expect(field2Textbox).toHaveValue('Hello World!')
    
    await page.pause()
})

test('Mouse drag and drop action', async ({ page }) => {
    await page.goto('http://127.0.0.1:5501/practice-websites/automationpy.html')

    const source: Locator = page.locator('#draggable')
    const target: Locator = page.locator('#droppable')

    //In order to drag and drop, this is a simple syntax. 
    //await sourceElement.dragTo(targetElement)
    await source.dragTo(target)
    
    await page.pause()
})


