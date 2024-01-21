import { defineConfig, devices } from '@playwright/test';

//npx playwright test to execute all tests.

//playwright auto-wait - https://playwright.dev/docs/actionability
//what auto-wait does is wait for checks before it executes the action, it waits for all the parameters to be ok before doing the action.

export default defineConfig({
testMatch: ["tests/03.basicInteractions.test.ts"],       //specifices what file to test, can make a general folder path to test more.
use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
},
retries: 0,                                     //retries if failure. Helpful if for example page hasn't loaded.
reporter: [["dot"], ["json",{                   //what this code does is write a report based on the tests ran.
    outputFile: "jsonReports/jsonReport.json"
}], ["html", {
    open: "never"
}]]
// ,

//   // projects: [
//   //   {
//   //     name: 'chromium',
//   //     use: { ...devices['Desktop Chrome'] },
//   //   },

//   //   {
//   //     name: 'firefox',
//   //     use: { ...devices['Desktop Firefox'] },
//   //   },

//   //   {
//   //     name: 'webkit',
//   //     use: { ...devices['Desktop Safari'] },
//   //   },
//   ],
});
