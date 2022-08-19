//this test uses Page Objec Model

// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
import { user } from './testdata';


test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  
  const homepage = new HomePage(page);
  
  await homepage.goto();
  await expect(page).toHaveTitle(/ParaBank/);
  
  // Click the get started link.
  await homepage.userName.type(user.username);
  await homepage.password.type(user.password);
  await homepage.loginBtn.click();
  
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*overview/);
  await expect(page).toHaveTitle(/Accounts Overview/);
});
