import { test, expect } from '@playwright/test';
import MainPage from '../pages/mainPage';
import FileUpload from '../pages/fileUploadPage';
import FileUploadPage from '../pages/fileUploadPage';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
})

test('TC 0003  : Verify that file upload function', async ({ page, baseURL }) => {

  const mainPage = new MainPage(page);
  const fileUploadPage = new FileUploadPage(page);

  await mainPage.clickTitle("File Upload");
  await expect(page).toHaveURL(`${baseURL}upload`);
  /* 
    Click "Choose File" button & Upload a file
  */
    const filechooser = page.waitForEvent('filechooser');
    await fileUploadPage.clickChooseFileBtn();
    const file = await filechooser;
    await file.setFiles('testData/images/image.png');
    await fileUploadPage.clickUploadBtn();
    /* 
        Assert the value
    */
   await expect(await fileUploadPage.getInnerTextInUploadFile()).toContain('image.png');
});
