This is a command you need to run to install Playwright. 
npm init playwright@latest

When you join an existing project, you will not run the above command. Instead, you will run this command. 
npm install

testDir: './tests',
When Playwright runs, how does it know where our test files are?

This property tells Playwright my test cases are kept in the `tests` folder. Just go there and run them. 

reporter: 'html'
Playwright gives you an HTML report automatically.

projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
]

Projects mean running the same test case in different environments.
Each object inside a project is one environment.

It is an array because we can have so many environments. For example:
- Chrome
- Firefox
- Safari
- mobile
- tablet

node_modules folder
This is the folder which automatically gets created, and it holds all the packages/libraries/ and dependencies our project is using.

In Selenium, it is .m2/repository folder.

This folder is the place where all the required libraries are stored. 

Never ever edit the node_modules folder manually.

Direct Dependency - @playwright

Transitive Dependency - When we install Playwright, it automatically brings many other libraries along with it. These are called transitive dependencies. We do not install them manually. npm manages them for us.

package-lock.json
When we install Playwright or any library using `npm install`, npm downloads many packages into the `node_modules` folder. 
But different versions of the same package are also available on the internet.

This file stores the exact version of all the packages, transitive and direct dependencies that are installed in our project. 

Because of this, everyone will get the same setup, and the test will behave the same.

.gitignore
This is a file that contains the names of all the files and folders that `Git` should ignore.

Every Playwright test case should end with this extension: .spec.ts. 

Spec means specification. Any file that contains your test cases is called a spec file. 

Package.json file
This is the main file of a JavaScript project. 
This is a mandatory file that we need to have in every JavaScript project. 
This is similar to pom.xml in Selenium. 

When we install packages, all the packages are stored inside package.json.

Headless execution versus headed execution. 

Whenever Playwright runs our automation script, it first launches a browser.

There are two ways it can launch the browser:
1. Headless mode
2. Headed mode

In headed execution, the browser opens visibly on your screen. For example, if your script opens Google, you will actually see the Chrome or Firefox window from your eyes.

And as the script runs, you can watch everything happening right in front of you. 

Headless execution means the browser still launches, but you cannot see it. There is no browser window on your screen. 
The answer is: the browser is still running in the background. It is opening web pages, clicking the buttons, typing text, and performing every action exactly the same way.
The only difference is the browser window is not displayed to you, so the browser is working. It is just invisible.

While we are creating the test cases, we should use the headed mode. 

In the case of headless execution, Playwright doesn't need to draw the browser on the screen, so it is slightly faster, and it also uses fewer system resources like CPU and memory. 
Most companies run their automated test cases in headless mode, especially in CI/CD pipelines like GitHub Actions, Jenkins, or Azure DevOps. 

When hundreds or even thousands of test cases are executed overnight, there is no need for someone to watch the browser. 

The goal is simply to execute the test as quickly as possible. 

Headed mode is mainly used during development and debugging. 

For example, you are writing a new test. A test case is failing. You want to understand how the application behaves. You want to verify that your script is interacting with the correct elements. 

This is the command to run all the Playwright tests.
`npx playwright test`

By default, Playwright will run test cases in headless mode. 

To see the browser, you have to run this command:
`npx playwright test --headed`. 

Inside the scripts section in package.json, I can give an alias or a nickname to the Playwright commands so that we don't have to remember, and also we don't have to run these lengthy commands. 

This is how you can run any custom script. 
`npm run <scriptName>`

For the special script which is test, you can remove the word "run" and you can instead run this command. 
`npm test`

When I'm running this command, `npx playwright test`, `npx` searches for the `playwright` library inside the `node_modules` folder.

But inside package.json, it is automatically aware of the Node modules folder, so I don't need the word `npx`. 

`playwright-report` folder contains the HTML report.

`test-results` folder, which contains all the test artefacts like screenshots, videos, traces, logs, and failure artefacts.

This command `npx playwright test` will completely ignore the page.pause() if you are running your test cases in the headless mode.

But if you're running the test cases in headed mode by running this command: `npx playwright test --headed`, the Playwright inspector will open, and now you can debug your Playwright script line by line. 

fullyParallel: true,

Suppose you have two spec files:
- Spec file 1 with 2 tests
- Spec file 2 with 2 tests

`fullyParallel: false` It affects only the tests inside the single spec file.

Tests in spec 1 will run sequentially, one after the other.
Tests in spec 2 will also run sequentially.

However, spec file 1 and spec file 2 will still run in parallel because Playwright uses multiple workers by default. 

`fullyParallel: true`
All the tests in spec 1 will run in parallel, and the tests in spec 2 will also run in parallel.

workers: 1
This setting means I'm disabling the parallelism for the entire framework/project.
Now, fully parallel setting is absolutely useless. Everything will run sequentially.

By default, Playwright deletes the previous report and always generates a fresh report in the `playwright-report` folder.

If you want to preserve previous reports, you can modify the reporter settings. 
reporter: [['html', {outputFolder: `reports/report-${Date.now()}`}]],

The reports keep accumulating forever, so you can easily consume a lot of disc space. You have to be slightly careful with this feature.

Workers

A worker is like an employee whose job is to execute test cases.
Suppose you have 10 test cases and 5 workers. Playwright can distribute the work amongst all 5 workers and run multiple tests at the same time. This makes the execution faster.

But when I run this command, `npx playwright test --workers=1` 

I'm telling Playwright to use only one worker to execute all the tests. Since there is only one worker available, this worker has to execute every test one by one. 

Test1
  |
Test2
  |
Test3
  |
Test4

As a result, the execution becomes slower because only one worker is doing all the work.

Why would anyone want to use one worker? 

Suppose all your test cases are using the same user account. 
- One test case is updating the profile.
- Another test case is changing the password.
- Another test case is deleting some data.

If all these tests run at the same time, they will interfere with each other and will cause failures. That is why we will force the number of workers to one by running this command. 

`npx playwright test --workers=1` 

Another use case of a single worker is debugging.
Suppose some test cases are failing randomly. To investigate the issue, most people will set the number of workers to one because you want to make the execution easier to observe and troubleshoot.

Use a single worker only in special cases. In most scenarios, we'll actually use multiple workers because parallel execution is much faster. 

5 workers = Five employees are working together. 
1 worker = only one employee is doing all the work. The work still gets done, but it takes longer. 

If only one person is working, that person has to execute all the 10 tests one by one. 
Person 1
Test 1
Test 2
Test 3
..
..
Test 10

But if you have 5 people working now, they can distribute the work amongst themselves. 

Person 1    -> Test1, Test2
Person 2    -> Test3, Test4
Person 3    -> Test5, Test6
Person 4    -> Test7, Test8
Person 5    -> Test9, Test10

The work finishes much faster. 

Playwright CLI commands

To run all the Playwright test cases, we run this command. 
`npx playwright test`

If I want to override any Playwright configuration setting, simply use `--`.

`npx playwright test --project=chromium`

To run all the Playwright test cases with 3 workers in parallel, run this command. 
`npx playwright test --project=chromium --workers=3`

To see all the test cases in headed mode, run this command. 
`npx playwright test --project=chromium --headed`

Run all the test cases of a particular spec file. Run this particular command. 
`npx playwright test payment.spec.ts --project=chromium --headed`

Run only a particular test case with this name.
`npx playwright test -g "checkout functionality" --project=chromium`

Run the test cases only from these files in parallel. (exact match)
`npx playwright test payment.spec.ts checkout.spec.ts --project=chromium --headed`

Run the test cases only from these files.(Pattern)
All those files that contain the word "payment" and "checkout" could be executed. 
`npx playwright test payment checkout --project=chromium --headed`

To skip a particular test case from executing, we can simply use `test.skip`.

Suppose I have 100 test cases, and I want to execute just 2. 
Should I write `test.skip` 98 times? NO

Instead, we can use `test.only`. It means run only those test cases that are marked with "test.only".  

Test Explorer
VS Code play button is the debug mode, where you can use = 1 worker. 
Terminal run is the execution mode = Multiple workers

Debugging
Debugging means finding and fixing mistakes in our code.
Every tester and developer does it almost daily. 

The basic idea of debugging
Normally, when we run test cases, they run very fast.
We cannot really see what is happening. 

Do not know where the test case failed, why it failed, or what went wrong. 

Debugging means
slowing down the test case
stopping it in the middle
and watching every step.

So that we can understand the problem and fix it.

How do we debug in Playwright? 
There are three simple ways. 

1. Using `page.pause()`
If we are running the test cases in headed mode, then only Playwright will open the Playwright inspector, and you can debug your test case line by line. 
Can use this feature if you know where the error is. 

2. Using `--debug` 
This runs the entire test case in debug mode. The test case will start paused from the very first line, and you can step through it line by line.

You can use this feature when you have no idea where the problem is. During this feature, you don't even have to run the test case in headed mode because it will automatically run in headed mode. It will automatically open the Playwright inspector. 

What all things can we do while debugging? 
While debugging, we can:
- watch the browser behaviour
- check if locators are correct
- see if the page is loading properly
- verify the data
- understand timing issues

We are basically "watching the test work". 

Debugging helps us find:
- wrong locator
- page not loaded
- element is hidden
- wrong data
- missing wait
- timing issue

Debugging is temporary. Once you are done with debugging, make sure you remove this code: `await page.pause()`. 

3. VS Code debug button 
In order to use this feature, you have to put a breakpoint first, and then you can run the test case in debug mode. 

H 9 * * * *

