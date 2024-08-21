import { test, expect } from '@playwright/test';
import BasePage from '../../../pages/basePage'
import { errorMessages } from '../../../data/consts'
import generateRandomEmail from '../../../helpers/generateEmail'


test.describe('Registration popup possitive and negative checks', () => {
  
  let locators: BasePage;
  test.use({ storageState: './UI_tests/cookieState/cookies.json' });
  const randomEmail = generateRandomEmail();

  test.beforeEach(async ({ page }) => {
    locators = new BasePage(page);
    await page.goto(`/`);
    await locators.checkLogoIsVisible();
    await locators.loginPopup.triggerTheLoginPopup();
  })


  test('Verify user can register new account', async () => {

    await locators.loginPopup.registrationLink.click();
    expect (await locators.registrationPopup.registrationEmailField.isVisible()).toBe(true);
    await locators.registrationPopup.registrationEmailField.type(randomEmail);
    await locators.registrationPopup.submitNewEmailBtn.click();
    expect (await locators.registrationPopup.registerAgreementModal.isEnabled()).toBe(true);
    await locators.registrationPopup.acceptAgreementBtn.click();
    expect (await locators.registrationPopup.successRegisterModal.isEnabled()).toBe(true);

  });

  test('Verify user can NOT register already existing email address', async () => {

    await locators.loginPopup.registrationLink.click();
    expect (await locators.registrationPopup.registrationEmailField.isVisible()).toBe(true);
    await locators.registrationPopup.registrationEmailField.type(randomEmail);
    await locators.registrationPopup.submitNewEmailBtn.click();
    expect (await locators.loginPopup.incorrectFieldError.isEnabled()).toBe(true);
    expect (await locators.loginPopup.incorrectFieldError.innerText()).toContain(errorMessages.emailExistsError);
  });

})