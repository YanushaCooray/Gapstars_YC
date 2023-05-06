import { test, expect } from '@playwright/test';
import MainPage from '../pages/mainPage';
import FramesPage from '../pages/framesPage';
import IframePage from '../pages/iframePage';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
});

test('TC 0004  : Verify that all the functions in iframe page', async ({ page, baseURL }) => {

    const mainPage = new MainPage(page);
    const framesPage = new FramesPage(page);
    const iframePage = new IframePage(page);
    const text = 'Hi ! I am Yanusha Cooray';

    await mainPage.clickTitle("Frames");
    await framesPage.clickIframes();
    /* 
        Add text into the input box
    */
    await iframePage.addTextIntoInputBox(text);
    /* 
         Check whether Input text is equal to the expected one
    */
    await expect(await iframePage.getTextInsideTheInputbox()).toContain(text);
    /* 
         Select the input text
    */
    await page.keyboard.press('Control+A');
    await iframePage.clickBoldBtn();
    /* 
         'STRONG' value should be displayed when click "Bold" button
    */
    await expect(await iframePage.getIndex1Text()).toContain('strong');
    /* 
        Click Italic button & verify the functionality
    */
    await iframePage.clickItalicBtn();
    await expect(await iframePage.getIndex1Text()).toContain('em');

});