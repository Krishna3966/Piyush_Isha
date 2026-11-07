
Why do we need visual testing? 

Yesterday, you automated a login page. Your test is checking four things:
1. The username text box is visible.
2. The password text box is visible.
3. The login button is visible.
4. The login works successfully.

Everything passed. Today, a developer makes only CSS changes.

The developer has not touched upon any functionality, but on screen:
- The login button moves slightly.
- The spacing between elements becomes uneven.
- The company logo shifts to the right.
- The font looks slightly different.

Will your functional test pass or fail? 
PASSS

Our functional tests only verify that the application works. They do not verify that it still looks correct. That gap is what visual testing fills. 

Functional testing asks: Does the application work? 
Visual testing asks: Does the application still look the same? 

Functional tests will catch the broken logic, wrong results, and failed workflows. 
Visual testing will catch if a button is moved slightly, if the logo is missing, if the font is slightly wrong, if the spacing is broken, if the text is overlapping. 

Functional testing will miss anything that only affects appearance. 
Visual testing misses anything that is not visible on the screen.

Suppose your manager walks by your desk and asks, "Can you quickly check whether anything has changed on the home page since yesterday?" How would you check? 

You would not inspect hundreds of buttons one by one. You would simply put yesterday's screenshot next to today's screenshot. If they look the same, nothing has changed, but if the login button has moved, the logo has disappeared, or the fonts have changed, you would see it immediately. 

Visual testing does exactly this, but Playwright is doing the comparison for you automatically in every test run. 

Visual testing means comparing the current screenshot with the previously saved screenshot to detect UI changes. 

In Playwright, visual comparison is built-in. We just need one assertion. 

############################################################
await expect(page).toHaveScreenshot('screenshotname.extension')
############################################################

This line tells Playwright to take a screenshot of the current page and compare it with the previously saved screenshot. 

Baseline - This is the reference screenshot, which shows how the UI is supposed to look, also called a snapshot. 

Actual - The screenshot that Playwright captures in the current run 

Expected - What the report calls the baseline. Expected = Baseline

Diff - It is the third image that highlights the pixels that are different between actual and expected. This means what has changed.

The first run of visual testing is special. It always fails. At this point, we don't have a baseline, so Playwright will fail the test case purposely, but it'll also create a baseline for subsequent runs onward. 

From the second run onwards, the real visual testing begins. Playwright captures a new screenshot, compares it with the baseline that it has captured in the first run, and then there are two outcomes. 

1. Both are the same. It means my visual test passed.
2. They are different, so my test case will fail, and Playwright will create a diff image to show what has changed. 