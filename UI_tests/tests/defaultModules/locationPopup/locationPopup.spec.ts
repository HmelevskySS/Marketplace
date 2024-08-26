import { test, expect } from '@playwright/test';
import BasePage from '../../../pages/basePage'
import { errorMessages, cityToSearch } from '../../../data/consts'


test.describe('Location popup positive and negative checks', () => {
  
  let locators: BasePage;
  test.use({ storageState: './UI_tests/cookieState/cookies.json' });

  test.beforeEach(async ({ page }) => {
    locators = new BasePage(page);
    await page.goto(`/`);
    await locators.checkLogoIsVisible();
    await locators.locationPopup.openTheLocationPopup();
  })

  test('Verify user can select his own city in the location dropdown', async () => {

    await locators.locationPopup.clearLocationInputBtn.click();
    expect(await locators.locationPopup.locationInputField.inputValue()).toContain('');
    expect(await locators.locationPopup.citiesDropdown.isEnabled()).toBe(true); 
    let currentCity = await locators.locationPopup.citiesDropdownItem.nth(4).innerText();
    await locators.locationPopup.citiesDropdownItem.nth(4).click();
    expect(await locators.locationPopup.locationInputField.inputValue()).toContain(currentCity);
    await locators.locationPopup.saveLocationBtn.click();
    await locators.locationPopup.locationInputField.waitFor({state: 'hidden'});
    expect(await locators.locationPopup.locationBtn.innerText()).toContain(currentCity);

  });

  test('Verify user can search a city in the location dropdown', async () => {

    await locators.locationPopup.clearLocationInputBtn.click();
    expect(await locators.locationPopup.locationInputField.inputValue()).toContain('');
    await locators.locationPopup.locationInputField.type(cityToSearch);
    await locators.locationPopup.citiesDropdownItem.waitFor({state: 'visible'});
    expect(await locators.locationPopup.citiesDropdownItem.nth(0).innerText()).toContain(cityToSearch);

  });

  test('Verify user can NOT set empty field in the location popup', async () => {

    await locators.locationPopup.clearLocationInputBtn.click();
    expect(await locators.locationPopup.locationInputField.inputValue()).toContain('');
    await locators.locationPopup.locationModal.click();
    expect(await locators.loginPopup.incorrectFieldError.innerText()).toContain(errorMessages.locationIsNotSelectedError);
    expect(await locators.locationPopup.saveLocationBtn.isDisabled()).toBe(true);

  });
})