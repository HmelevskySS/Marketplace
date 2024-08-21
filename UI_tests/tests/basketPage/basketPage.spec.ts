import { test, expect } from '@playwright/test';
import BasketPage from '../../pages/basketPage/basketPage'
import CataloguePage from '../../pages/cataloguePage/cataloguePage'
import { snackBarsText, popupTexts } from '../../data/consts'
import { urls } from '../../data/urls'

let productName: String;

test.describe('Basket page possitive and negative checks', () => {
  
  let locators: BasketPage;
  let catalogue: CataloguePage;
  test.use({ storageState: './UI_tests/cookieState/cookies.json' });

  test.beforeEach(async ({ page }) => {
    locators = new BasketPage(page);
    catalogue = new CataloguePage(page);
    await page.goto(`/`);
    await locators.checkLogoIsVisible();
    productName = await catalogue.addItemToTheBasketAndGoThere();
  })


  test('Verify user can add any product to the basket', async () => {

    await locators.basketTab.waitFor({state: 'visible'});
    expect(await locators.basketItemTitle.innerText()).toEqual(productName);

  });

  test('Verify the price changes in case user increases/decreases the amount of added products', async () => {

    const productPrice = await locators.returnProductPrice();
    await locators.plusQuantityBtn.click();
    const quantity = await locators.QuantityInput.inputValue();
    await locators.loadingState.waitFor({ state: "attached" });
    await locators.loadingState.waitFor({ state: "detached" });
    const receivedString = await locators.returnProductPrice();
    expect(receivedString).toContain(quantity*productPrice+'');

  });

  test('Verify the error displays on the page, when user tries to enter 0 into the amount field', async () => {

    await locators.QuantityInput.fill('0');
    expect(await locators.notificationBar.innerText()).toEqual(snackBarsText.notEnoughItems);

  });

  test('Verify the displaying additional services added to the product increase final price', async () => {

    const productPrice = await locators.returnProductPrice();
    const servicePrice = await locators.returnServicePrice(1);
    const itemsBeforeCheck = await locators.checkBasketAmount();
    await locators.additionalServiceCheckboxes.last().click();
    await locators.loadingState.waitFor({ state: "attached" });
    await locators.loadingState.waitFor({ state: "detached" });
    const itemsAfterCheck = await locators.checkBasketAmount();
    expect(itemsAfterCheck - itemsBeforeCheck == 1).toBe(true);
    const finalPrice = await locators.returnProductPrice();
    expect(Number(productPrice) + Number(servicePrice) == Number(finalPrice)).toBe(true);

  });

  test('Verify user can open the whole list of additional services and add it to the order', async () => {
    
    await locators.allServicesLink.click();
    const itemsBeforeCheck = await locators.checkBasketAmount();
    await locators.allServicesSheet.waitFor({state: "visible"});
    await locators.inssuranceTab.first().click();
    expect(await locators.inssuranceTab.last().isVisible()).toBe(true);
    await locators.addServiceBtn.click();
    await locators.closeAllServicesSheetBtn.click();
    await locators.allServicesSheet.waitFor({state: "hidden"});
    const itemsAfterCheck = await locators.checkBasketAmount();
    expect(itemsAfterCheck - itemsBeforeCheck == 1).toBe(true);
  });

  test('Verify the login form is opened after clicking on ‘Оформить заказ’-button for not logged in user', async () => {

    await locators.orderBtn.click();
    await locators.loginToContinueModal.waitFor({state: "visible"});
    expect(await locators.loginModalNotifyText.innerText()).toEqual(popupTexts.loginToContinue);

  });

  test('Verify user can remove the product from the basket', async () => {

    await locators.removeProductBtn.click();
    await locators.removeProductModal.waitFor({state: "visible"});
    await locators.removeProductModalAcceptBtn.click();
    expect(await locators.notificationBar.innerText()).toEqual(snackBarsText.removedItem);
    expect(await locators.basketItemTitle.isHidden()).toEqual(true);

  });

  test('Verify user is redirected to the certificates page, if he has no added ones', async ( {page} ) => {

    await locators.sertificateTab.click();
    await locators.sertificateTabLink.waitFor({state: "visible"});
    await locators.sertificateTabLink.click();
    await catalogue.productList.waitFor({state: "visible"});
    expect(page.url()).toContain(urls.sertificates);

  });

})