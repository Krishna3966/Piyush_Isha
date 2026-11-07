/*
A dialogue is something that interrupts the user and asks for attention.

There are two major types of dialogues. 
1. Browser dialogue 
2. Application dialogue - They are very simple and easy to automate. 

Simple ALert - Just inform the user about something, for example, showing some message.
Confirmation alert: the purpose is to ask the user to choose. It is about decision-making. 
Prompt alert - The purpose is to ask the user for some input. 

Important concept when it comes to all three alerts is that
they have to be handled specially using an event listener.
//page.on('dialog')
*/

import { test, expect, Locator } from '@playwright/test';

//The reason this script is working perfectly is because
//Playwright automatically dismisses the dialogues.
//It is because your test case should not freeze.
//If you don't use the event listener, Playwright will
//automatically dismiss the dialogues to prevent blocking. 
test('All 3 Alerts', async ({ page }) => {
    await page.goto('http://127.0.0.1:5501/practice-websites/automationpy.html')

    await page.locator('#alertBtn').click()
    await page.locator('#confirmBtn').click()
    await page.locator('#promptBtn').click()

    await page.pause()
})

//To modify the default behaviour of Playwright, you have to set up an event listener. 
//If I use an event listener, now I'll have more control over the dialogue. 

//page.on('eventName', callbackFunction)

test('Simple Alert', async ({ page }) => {
    await page.goto('http://127.0.0.1:5501/practice-websites/automationpy.html')

    //It is an event listener. It simply means: if something
    // happens on the page, notify me. This means when a dialogue
    // event happens, just run this callback function.
    //Since I have set up my own listener, I am fully responsible
    // for deciding what to do. Playwright will no longer auto-dismiss it. 
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert')
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toBe('I am an alert box!')

        await dialog.accept()
    })

    await page.getByRole('button', {name: 'Simple Alert'}).click()

    await page.pause()
})

test('Confirm Alert', async ({ page }) => {
    await page.goto('http://127.0.0.1:5501/practice-websites/automationpy.html')

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm')
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toBe('Press a button!')

        await dialog.accept()
    })

    await page.getByRole('button', {name: 'Confirmation Alert'}).click()

    await expect(page.locator('#demo')).toHaveText('You pressed OK!')

    await page.pause()
})

test('Prompt Alert', async ({ page }) => {
    await page.goto('http://127.0.0.1:5501/practice-websites/automationpy.html')

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt')
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toBe('Please enter your name:')
        expect(dialog.defaultValue()).toBe('Harry Potter')

        await dialog.accept("Piyush")
    })

    await page.getByRole('button', {name: 'Prompt Alert'}).click()

    await expect(page.locator('#demo')).toHaveText('Hello Piyush! How are you today?')

    await page.pause()
})