//recorded using npx playwright codegen                                
  import { test, expect } from '@playwright/test';

//note, playwright cannot capture hover so those need to be inputed manually.

  test('test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/\'');
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]") 
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
    await page.getByPlaceholder('E-Mail Address').press('Tab');
    await page.getByPlaceholder('Password').fill('Pass123$');
    await page.getByPlaceholder('Password').press('Enter');
    await page.getByRole('link', { name: ' Edit your account' }).click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').press('Control+a');
    await page.getByPlaceholder('First Name').fill('Koushik');
    await page.getByPlaceholder('First Name').press('Tab'); // this one presses the tab to go to the next input field.
    await page.getByPlaceholder('Last Name').fill('CC');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]") 
    await page.getByRole('link', { name: 'Logout', exact: true }).click();
    await page.getByRole('link', { name: 'Continue' }).click();
  });