import { Locator, Page, expect } from "@playwright/test";
import BasePage from "../basePage";
import { searchRequests } from "../../data/consts";


export default class BasketPage extends BasePage {
    
    basketTab: Locator;
    sertificateTab: Locator;
    sertificateTabLink: Locator;
    basketItemTitle: Locator;
    plusQuantityBtn: Locator;
    minusQuantityBtn: Locator;
    QuantityInput: Locator;
    finalPrice: Locator;
    loadingState: Locator;
    orderBtn: Locator;
    notificationBar: Locator;
    additionalServiceCheckboxes: Locator;
    additionalServicePrices: Locator;
    totalItemsRows: Locator;
    allServicesLink: Locator;
    allServicesSheet: Locator;
    inssuranceTab: Locator;
    addServiceBtn: Locator;
    closeAllServicesSheetBtn: Locator;
    loginToContinueModal: Locator;
    loginModalNotifyText: Locator;
    removeProductBtn: Locator;
    removeProductModal: Locator;
    removeProductModalAcceptBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.basketTab = page.locator('[data-testid="basket-tab"]');
        this.sertificateTab = page.locator('[data-testid="eCart-tab"]');
        this.sertificateTabLink = page.locator('.Link_link__qgZBw.Link_underline__dYCr0');
        this.basketItemTitle = page.locator('.BasketItem_title__MzCQ9');
        this.plusQuantityBtn = page.locator('[aria-label="Увеличение количества"]');
        this.minusQuantityBtn = page.locator('[aria-label="Увеличение количества"]');
        this.QuantityInput = page.locator('[aria-label="Количество добавленного товара"]');
        this.finalPrice = page.locator('[data-testid="total-price"]');
        this.loadingState = page.locator('[data-testid="loader-order-total-container"]');
        this.orderBtn = page.locator('[data-testid="basketConfirmation"]');
        this.notificationBar = page.locator('.Snackbar-module__snackbar');
        this.additionalServiceCheckboxes = page.locator('.ServiceBlock_checkIcon__9m3s_');
        this.additionalServicePrices = page.locator('.PriceBlock_priceBlock__bLP4B.ServiceBlock_price__mpCOu');
        this.totalItemsRows = page.locator('.OrderPrice_info__D7uDi.OrderPrice_row__N0qvn');
        this.allServicesLink = page.locator('[data-testid="all-services-button"]');
        this.allServicesSheet = page.locator('[data-testid="additional-service-sheet"]');
        this.inssuranceTab = page.locator('[aria-label="Страхование"]');
        this.addServiceBtn = page.locator('[aria-label="Добавить услугу"]');
        this.closeAllServicesSheetBtn = page.locator('[data-testid="close-popup-icon"]');
        this.loginToContinueModal = page.locator('.PageWrapper_pageWrapper__1AdcJ');
        this.loginModalNotifyText = page.locator('.BasketCheckoutAuthScreen_description__VWdvc');
        this.removeProductBtn = page.locator('[aria-label="Удалить товар"]');
        this.removeProductModal = page.locator('[data-testid="modalContentWrapper"]');
        this.removeProductModalAcceptBtn = page.locator('[data-testid="modal-confirmation-button"]');
    }

    async returnProductPrice(){
        return (await this.finalPrice.textContent())?.replace(/[^\d]/g, '');
    }

    async returnServicePrice(index = 0){
        return (await this.additionalServicePrices.nth(index).textContent())?.replace(/[^\d]/g, '');
    }

    async checkBasketAmount() { //функция проверки кол-ва айтемов в корзине
        return await this.totalItemsRows.count();
    }

}