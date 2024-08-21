import { Page, Locator, expect } from "@playwright/test";

export default class SiteSearch {

    private page: Page;
    searchBar: Locator;
    searchSuggestList: Locator;
    searchBtn: Locator;
    suggestHighlights: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.locator('#catalogSearch');
        this.searchSuggestList = page.locator('[data-testid="suggest"]');
        this.searchBtn = page.locator('.Search_searchBtn__Tk7Gw');
        this.suggestHighlights = page.locator('.ProductItem_title__qJCTw');
    }

}