import { Locator, Page, expect } from "@playwright/test";
import BasePage from "../basePage";
import { searchRequests } from "../../data/consts";


export default class SearchResultsPage extends BasePage {
    
    cardInfo: Locator;
    pageTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.cardInfo = page.locator('.result__name');
        this.pageTitle = page.getByText('Результаты поиска');
    }

    async checkEachCardContainsWord() { //функция проверки, что поисковой запрос содержится в каждом названии карточки
        const count = await this.cardInfo.count();
        for (let i = 0; i < count; i++) {
            const element = this.cardInfo.nth(i);
            const text = await element.innerText();
            expect(text.toLowerCase()).toContain(searchRequests.correctOne);
        }
    }

}