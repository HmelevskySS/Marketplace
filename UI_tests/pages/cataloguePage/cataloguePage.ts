import { Locator, Page, expect } from "@playwright/test";
import BasePage from "../basePage";
import { searchRequests } from "../../data/consts";


export default class CataloguePage extends BasePage {
    
    productList: Locator;
    catalogueProductName: Locator;
    inBasketBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.productList = page.locator('[data-testid="product-list"]');
        this.inBasketBtn = page.locator('[data-testid="in-basket-button"]');
        this.catalogueProductName = page.locator('[data-testid="card-info-a"]').first();
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

}