import { test, expect } from '@playwright/test';
import MainPage from '../pages/mainPage';
import FramesPage from '../pages/framesPage';
import NestedFramePage from '../pages/nestedFramePage';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
});

test('TC 0008  : Verify that all the functions in nested frames page', async ({ page, baseURL }) => {

    const mainPage = new MainPage(page);
    const framesPage = new FramesPage(page);
    const nestedFramePage = new NestedFramePage(page);

    await mainPage.clickTitle("Frames");
    await framesPage.clickNestedFrames();
    /* 
         Verify that left text
    */
    await expect(await nestedFramePage.getLeftText()).toContain('LEFT');
    /* 
          Verify that middle text
    */
    await expect(await nestedFramePage.getMiddleText()).toContain('MIDDLE');
    /* 
        Verify that right text
    */
    await expect(await nestedFramePage.getRightText()).toContain('RIGHT');
    /* 
        Verify that bottom text
    */
    await expect(await nestedFramePage.getBottomText()).toContain('BOTTOM');

});