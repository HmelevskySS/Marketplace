import { test, expect } from '@playwright/test';

test('Save accepted cookies state', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('');
  const acceptCookiesButton = page.locator('.AgreementCookie_buttons__zhpxj > .Button-module__blue-primary');
  await expect(acceptCookiesButton).toBeVisible();
  await acceptCookiesButton.click();
  await expect(acceptCookiesButton).toBeHidden();
  await context.storageState({ path: './UI_tests/cookieState/cookies.json' });
  await page.close();
});
