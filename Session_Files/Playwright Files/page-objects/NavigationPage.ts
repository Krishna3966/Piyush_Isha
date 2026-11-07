import { Locator, Page } from "@playwright/test";

export class NavigationPage {
    private readonly page: Page
    private readonly formLayoutsMenuItem: Locator
    private readonly datePickerMenuItem: Locator
    private readonly smartTableMenuItem: Locator
    private readonly toastrMenuItem: Locator
    private readonly tooltipMenuItem: Locator

    constructor(page: Page) {
        this.page = page
        this.formLayoutsMenuItem = this.page.getByText('Form Layouts')
        this.datePickerMenuItem = this.page.getByText('Datepicker')
        this.smartTableMenuItem = this.page.getByText('Smart Table')
        this.toastrMenuItem = this.page.getByText('Toastr')
        this.tooltipMenuItem = this.page.getByText('Tooltip')
    }

    //As for best practice, we should separate the locators from methods. 

    //All TypeScript methods are public by default. 
    //If you want to call one method inside another method, you have to use this keyword. 
    async formLayoutsPage() {
        this.selectGroupMenuItem('Forms')
        await this.formLayoutsMenuItem.click()
    }

    async datePickerPage() {
        this.selectGroupMenuItem('Forms')
        await this.datePickerMenuItem.click()
    }

    async smartTablePage() {
        this.selectGroupMenuItem('Tables & Data')
        await this.smartTableMenuItem.click()
    }

    async toastrPage() {
        this.selectGroupMenuItem('Modal & Overlays')
        await this.toastrMenuItem.click()
    }

    async tooltipPage() {
        this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipMenuItem.click()
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')

        //If the menu is not opened, then only open it. 
        if (expandedState === "false") {
            await groupMenuItem.click()
        }
    }
}