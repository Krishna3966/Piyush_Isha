import { expect, test } from '@playwright/test';
import { OrangeHrmLoginPage } from '../page-objects/OrangeHrmLoginPage';

test('logs in to OrangeHRM successfully', async ({ page }) => {
  const loginPage = new OrangeHrmLoginPage(page);
  await loginPage.goto();

  await loginPage.login('Admin', 'admin123');

  await expect(page).toHaveURL(/\/dashboard\/index/);
  await expect(loginPage.dashboardHeading).toBeVisible();
});

test('shows an error when OrangeHRM login credentials are invalid', async ({ page }) => {
  const loginPage = new OrangeHrmLoginPage(page);
  await loginPage.goto();

  await loginPage.login('Admin', 'wrong-password');

  await expect(loginPage.invalidCredentialsMessage).toBeVisible();
  await expect(page).toHaveURL(/\/auth\/login/);
});