import { test, expect } from '@playwright/test';
import BasePage from '../../../pages/basePage'
import { userAccount, incorrectUserData, errorMessages } from '../../../data/consts'


test.describe('Login popup positive and negative checks', () => {
  
  let locators: BasePage;
  test.use({ storageState: './UI_tests/cookieState/cookies.json' });

  test.beforeEach(async ({ page }) => {
    locators = new BasePage(page);
    await page.goto(`/`);
    await locators.checkLogoIsVisible();
    await locators.loginPopup.triggerTheLoginPopup();
  })

  test('Verify user can log in his account on the main page', async () => {

    await locators.loginPopup.emailField.fill(userAccount.email);
    await locators.loginPopup.passwordField.fill(userAccount.password);
    await locators.loginPopup.submitFormBtn.click();
    expect(await locators.loginPopup.phoneNumSubmitBtn.isDisabled()).toBe(true);
    await locators.loginPopup.closeModalBtn.click();
    await locators.loginPopup.logOutTheAccount();

  });

  test('Verify user can NOT login his account with invalid password and valid email', async () => {

    await locators.loginPopup.emailField.fill(userAccount.email);
    await locators.loginPopup.passwordField.fill(incorrectUserData.password);
    await locators.loginPopup.submitFormBtn.click();
    expect(await locators.loginPopup.incorrectFieldError.isEnabled()).toBe(true);
    expect(await locators.loginPopup.incorrectFieldError.innerText()).toContain(errorMessages.incorrectPassword);

  });

  test('Verify user can NOT login his account with filled password field and invalid email format', async () => {

    await locators.loginPopup.emailField.fill(incorrectUserData.email);
    await locators.loginPopup.passwordField.fill(incorrectUserData.password);
    await locators.loginPopup.submitFormBtn.click();
    expect(await locators.loginPopup.incorrectFieldError.isEnabled()).toBe(true);
    expect(await locators.loginPopup.incorrectFieldError.innerText()).toContain(errorMessages.incorrectEmailFormat);

  });

  test('Verify the login popup fields have empty values validation', async () => {

    await locators.loginPopup.submitFormBtn.click();
    expect(await locators.loginPopup.incorrectFieldError.first().isEnabled()).toBe(true);
    expect(await locators.loginPopup.incorrectFieldError.last().isEnabled()).toBe(true);
    expect(await locators.loginPopup.incorrectFieldError.first().innerText()).toContain(errorMessages.emailNotEntered);
    expect(await locators.loginPopup.incorrectFieldError.last().innerText()).toContain(errorMessages.passwordNotEntered);

  });
})