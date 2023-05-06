import { test, expect } from '@playwright/test';
import MainPage from '../pages/mainPage';
import DragAndDropPage from '../pages/dragAndDropPage';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
});

test('TC 0002  : Verify that drag and drop function', async ({ page, baseURL }) => {

    const mainPage = new MainPage(page);
    const dragAndDropPage = new DragAndDropPage(page);

    await mainPage.clickTitle("Drag and Drop");
    await dragAndDropPage.dragElements();
    /* 
        Take a screenshot of final view of the page
    */
    await page.screenshot({ path: './screenshots/drag_and_drop.png', fullPage: true });
    /* 
        Get first element contain text after shape drag and drop and verify 
    */
    const firstElementWord = await page.locator('[id="columns"]').first().textContent();
    await expect(firstElementWord).toContain("B")

});