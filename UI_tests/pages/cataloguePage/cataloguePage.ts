import { Locator, Page, expect } from "@playwright/test";
import BasePage from "../basePage";
import { searchRequests } from "../../data/consts";


export default class CataloguePage extends BasePage {
    
    productList: Locator;
    catalogueProductName: Locator;
    discountCatalogueList: Locator;
    inBasketBtn: Locator;
    discountOptionsList: Locator;
    discountProductBadge: Locator;
    pageLoadingState: Locator;
    minPriceField: Locator;
    maxPriceField: Locator;
    productPrices: Locator;

    constructor(page: Page) {
        super(page);
        this.productList = page.locator('[data-testid="product-list"]');
        this.inBasketBtn = page.locator('[data-testid="in-basket-button"]');
        this.discountCatalogueList = page.locator('.style_content__AwtlC');
        this.catalogueProductName = page.locator('[data-testid="card-info-a"]').first();
        this.discountOptionsList = page.locator('.BaseRadioButton-module__radioButtonContainer');
        this.discountProductBadge = page.locator('.style_promoDiscount___y27J');
        this.pageLoadingState = page.locator('[data-testid="specialOffersLoader"]');
        this.minPriceField = page.locator('[id="minPrice"]');
        this.maxPriceField = page.locator('[id="maxPrice"]');
        this.productPrices = page.locator('.style_currentPrice__Lp9e2');

    }

    async addItemToTheBasketAndGoThere(){
        await this.toolBar.fridgeBtn.click();
        await this.productList.waitFor({state: "visible"});
        const productName = await this.catalogueProductName.innerText();
        await this.inBasketBtn.first().scrollIntoViewIfNeeded();
        await this.inBasketBtn.first().click();
        await this.loginPopup.basketCounter.click();
        return productName;
    }

    async checkProductBadgesDiscount() {
        const count = await this.discountProductBadge.count();
        for (let i = 0; i < count; i++) {
            const element = this.discountProductBadge.nth(i);
            const discount = Number((await element.textContent())?.replace(/[-\D]/g, ''));
            expect(!isNaN(discount) && discount >= 50).toBe(true);
        }
    }

    async checkThePriceValue(min = 0, max = 16000) {
        const count = await this.productPrices.count();
        for (let i = 0; i < count; i++) {
            const element = this.productPrices.nth(i);
            const price = Number((await element.textContent())?.replace(/[-\D]/g, ''));
            if (price) {
                expect(price >= min*100 && price <= max*100).toBe(true);
            }
        }
    }    
}