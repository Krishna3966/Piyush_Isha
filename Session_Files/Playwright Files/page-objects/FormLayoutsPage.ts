import { Locator, Page } from "@playwright/test";

export class FormLayoutsPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    //Remove all the locators from this method and store all of them inside the constructor. 
    async submitUsingTheGridForm(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', {hasText: 'Using the Grid'})

        await usingTheGridForm.getByRole('textbox', {name: 'Email'}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name: 'Password'}).fill(password)

        //Force means I am instructing Playwright to bypass all the actionability checks
        // and forcefully perform the action. 
        await usingTheGridForm.getByRole('radio', {name: optionText}).check({force: true})
        await usingTheGridForm.getByRole('button', {name: 'Sign in'}).click()
    }

    /**
     * This method will fill out the inline form with user details. 
     * @param name - Should be the first end tasking 
     * @param email - Should be a valid email for the test user. 
     * @param rememberMe - True or false: if user session has to be saved 
     */

    async submitInlineForm(name: string, email: string, rememberMe: boolean) {
        const inlineForm = this.page.locator('nb-card', {hasText: 'Inline form'})

        await inlineForm.getByRole('textbox', {name: 'Jane Doe'}).fill(name)
        await inlineForm.getByRole('textbox', {name: 'Email'}).fill(email)

        if(rememberMe){
            //Always use the check and not click method. 
            await inlineForm.getByRole('checkbox').check({force: true})
        }
        await inlineForm.getByRole('button').click()
    }    
}