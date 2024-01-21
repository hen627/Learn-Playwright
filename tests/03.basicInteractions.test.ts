import {expect,test} from "@playwright/test"

// test("Interaction with inputs", async ({ page }) => {
    
//     await page.goto("https://www.Lambdatest.com/selenium-playground/simple-form-demo");
//     const messageInput =  page.locator("input#user-message") //since finding the elemenent await is not needed.
//     await messageInput.scrollIntoViewIfNeeded(); //mostly playwright scrolls on it's own, but here you can specify it if you want to do it .
//     console.log(await messageInput.getAttribute("placeholder")); // gets the message from placeholder.
//     expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message") //web first assertion which means it will retry until expected condition is met.
//     console.log('Before entering the data: ' + await messageInput.inputValue()) //this gets teh active value compared to what the placeholder gets.
//     messageInput.type("Hi Henry") // uses the locator to type into the element.
//     console.log('After entering the data: ' + await messageInput.inputValue()) //this gets teh active value compared to what the placeholder gets.
// })  commented out for now since no reason to run both tests

test("Sum", async({page}) =>{

    await page.goto("https://www.Lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("#sum1");
    const sum2input = page.locator("#sum2"); // these are now locating based on unique id.

    const getValuesBtn = page.locator("//button[text()='Get values']") //playwright can tell what is css etc.

    await sum1input.type("121"); //this has to be given as string. a work around is using an empty string + num, like "" +  num1
    await getValuesBtn.click()
})

//in snow area on top of mountain in bottom left or bottom right is another relic.