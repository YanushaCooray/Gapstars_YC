import { test, expect, Dialog } from '@playwright/test';
import MainPage from '../pages/mainPage';
import JavaScriptAlertsPage from '../pages/javaScriptAlertsPage';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
    const mainPage = new MainPage(page);
    await mainPage.clickTitle("JavaScript Alerts");
});

test('TC 0005  : Verify that JS alert button click function', async ({ page, baseURL }) => {

    const javaScriptAlertsPage = new JavaScriptAlertsPage(page);

    /* 
        Click JS Alert button 
    */
    await javaScriptAlertsPage.clickJSAlertBtn();
    /* 
        Verify that alert message contain text & accept the alert
    */
    await page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message).toContain("I am a JS Alert");
        await dialog.accept();
    });
    /* 
        Verify the success message
    */
    expect(await javaScriptAlertsPage.getResultText()).toContain("You successfully clicked an alert");

});

test('TC 0006  : Verify that error message when click the "cancel" button which is on "JS Confirm" alert box', async ({ page, baseURL }) => {
    /* 
        JS Confirm button click
    */
    const javaScriptAlertsPage = new JavaScriptAlertsPage(page);
    await javaScriptAlertsPage.clickJSConfirmBtn();
    /* 
       Verify that alert message contain text & accept the alert
   */
    await page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message).toContain("I am a JS Confirm");
        await dialog.dismiss();
    });
    /* 
       Verify the success message
   */
    expect(await javaScriptAlertsPage.getResultText()).toContain("You clicked: Cancel");

});

test('TC 0007  : Verify that enter value should be contain in the return message', async ({ page, baseURL }) => {
    /* 
        JS Confirm button click
    */
    const javaScriptAlertsPage = new JavaScriptAlertsPage(page);
    const message = 'Hi !! I am Yanusha...'
    /* 
     Verify that alert message contain text & accept the alert
    */
    await page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("prompt");
        await dialog.accept(message);
    });
    await javaScriptAlertsPage.clickJSPromtBtn();

    /* 
       Verify the success message
   */
    expect(await javaScriptAlertsPage.getResultText()).toContain("You entered: " + message);

});