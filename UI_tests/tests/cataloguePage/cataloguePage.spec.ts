import { test, expect } from '@playwright/test';
import CataloguePage from '../../pages/cataloguePage/cataloguePage'
import { snackBarsText, popupTexts } from '../../data/consts'
import { urls } from '../../data/urls'


test.describe('Catalogue page possitive and negative checks', () => {
  
  let locators: CataloguePage;
  test.use({ storageState: './UI_tests/cookieState/cookies.json' });

  test.beforeEach(async ({ page }) => {
    locators = new CataloguePage(page);
    await page.goto(`/`);
    await locators.checkLogoIsVisible();
  })


  test('Verify user can sort special offers by the discount percentage', async ({ page }) => {

    await locators.toolBar.allDiscounts.click();
    await locators.discountCatalogueList.waitFor({state: "visible"});
    expect(page.url()).toContain(urls.allDiscounts);
    await locators.discountOptionsList.nth(1).click();
    await locators.pageLoadingState.waitFor({ state: "attached" });
    await locators.pageLoadingState.waitFor({ state: "detached" });
    await locators.checkProductBadgesDiscount();

  });

  test('Check the price filtering works correctly', async ({ page }) => {

    await locators.toolBar.allDiscounts.click();
    await locators.discountCatalogueList.waitFor({state: "visible"});
    expect(page.url()).toContain(urls.allDiscounts);
    await locators.minPriceField.fill('10');
    await locators.maxPriceField.click();
    await locators.pageLoadingState.waitFor({ state: "attached" });
    await locators.pageLoadingState.waitFor({ state: "detached" });
    await locators.checkThePriceValue(10,);
    await locators.maxPriceField.fill('15');
    await locators.minPriceField.click();
    await locators.pageLoadingState.waitFor({ state: "attached" });
    await locators.pageLoadingState.waitFor({ state: "detached" });
    await locators.checkThePriceValue(10, 15);
  });

})