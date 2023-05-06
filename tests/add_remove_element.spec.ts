import { test, expect } from '@playwright/test';
import MainPage from '../pages/mainPage';
import AddRemoveElementPage from '../pages/addRemoveElementPage';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
})

test('TC 0001  : Verify that Add Element & Remove Element function', async ({ page, baseURL }) => {

  const mainPage = new MainPage(page);
  const addRemoveElementPage = new AddRemoveElementPage(page);


  await mainPage.clickTitle("Add/Remove Elements");
  await expect(page).toHaveURL(`${baseURL}add_remove_elements/`);
  /* 
    click the Add Element button 3 times
  */
  for (let index = 0; index < 3; index++) {
    await addRemoveElementPage.clickAddElementBtn();
  }
  /* 
    Verify the Delete button count is equal to the button click count
  */
  const num: number = await addRemoveElementPage.getCountDeleteButton()
  await expect(num).toEqual(3);

  /* 
    Verify that remove a delete button once click the Delete button
  */
  await addRemoveElementPage.clickDeleteButton();
  const index: number = await addRemoveElementPage.getCountDeleteButton()
  await expect(index).toEqual(2);
  await page.screenshot({ path: './screenshots/add_remove_element.png', fullPage: true })
 
});
