
/*
Scenario 1 - The user is present on the first page. 

Scenario 2 - The user is present on one of the middle pages.

Scenario 3 - The user is present on the last page.

Scenario 4 - The user does not exist at all.

We will use a while loop here because we do not know in advance where the user exists. 

Maybe on page 1, maybe on page 4, maybe on page 10, maybe nowhere.

While the user is not found 
    |
Check the current page.
    |
If found, check the checkbox and stop.
Else go to the next page. 

This process continues until either the user is found or the last page is reached. 

Start from Page1
Search for the username.
Found?
Yes -> Click the checkbox and stop.
No -> Go to the next page and repeat. 

I will stop when the last page is reached. 

*/

import { test, expect, Locator } from '@playwright/test';

//For the local applications, run the code using the terminal only. Don't use the VS Code play button. 
test('Pagination Table - v1', async ({ page }) => {
    await page.goto('http://127.0.0.1:5501/practice-websites/pagination.html')

    const userName = 'piyush'
    page.getByRole('table')
    const table: Locator = page.locator('#dataTable')

    while (true) {
        const isUserPresent = await table.getByRole('cell', { name: userName }).first().isVisible()

        if (isUserPresent) {
            await table.getByRole('row')
                .filter({ hasText: userName })
                .first()
                .getByRole('checkbox')
                .check()

            break
        } else {
            const nextEle = page.getByRole('button', { name: '›' })
            await nextEle.click()
        }
    }
    await page.pause()
})

//The above code will work fine if the user is present somewhere
//in the table, but what if this user does not exist anywhere in
// the table? The loop will continue forever. 

/*
On any of the middle pages, the next button is enabled. 
But on the last page, the Next button is disabled because of the
`disabled` attribute.



*/

test.only('Pagination Table - v2', async ({ page }) => {
    await page.goto('http://127.0.0.1:5501/practice-websites/pagination.html')

    const userName = 'piyush'
    page.getByRole('table')
    const table: Locator = page.locator('#dataTable')

    while (true) {
        const isUserPresent = await table.getByRole('cell', { name: userName }).first().isVisible()

        if (isUserPresent) {
            await table.getByRole('row')
                .filter({ hasText: userName })
                .first()
                .getByRole('checkbox')
                .check()

            break
        } else {
            const nextEle = page.getByRole('button', { name: '›' })
            await nextEle.click()

            const isDisabled = await nextEle.isDisabled()

            if(isDisabled){
                //Pagination is over. 
                console.log('pagination is over. Time to stop')
                break
            }
        }
    }
    await page.pause()
})

//TODO - 
//Instead of selecting just one user, you have to select every occurrence of John_Doe in the entire table. 