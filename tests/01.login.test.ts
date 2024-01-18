//building test blocks. playwright supports async and try out of the box.
import { test, chromium } from "@playwright/test"

test("Login test demo", async () => {

    const browser = await chromium.launch({
        headless: false                         //headless: false is for viewing the tests in browser. Aka it launches a browser window for oyu.
    }); //launches the chromium engine
    const context = await browser.newContext(); //Creates a new instance of a browser that is unrelated to other instanaces, hence a new context. Can also think of it as a new tab in a browser.
    const page = await context.newPage(); 

    await page.goto("https://ecommerce-playground.lambdatest.io/") //remember to use await so each line handles properly.

    //can right click and inspect to know what to click and see what we need to select.
    //playwright has a text locator that will interact with the first item.

    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]") //xpath starts with double slash 
    // await page.click("text=Login") //since login is the only text we don't need the xpath
    await page.click("'Login'") //this is a shorter way of using the top one.

    await page.fill("input[name='email']", "koushik350@gmail.com")
    await page.fill("input[name='password']", "Pass123$")
    await page.click("input[value='Login']");
    //to summarize the three above, fill will fill a input element, the first part is the locator, the second is what to enter in the field.
    // and click is self explanatory, also uses the locator in the string.

    await page.waitForTimeout(5000);

    //if a test doesn't have an assertion it's useless.
    
    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    await newPage.waitForTimeout(5000);

})