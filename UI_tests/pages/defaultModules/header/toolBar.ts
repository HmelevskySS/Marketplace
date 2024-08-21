import { Page, Locator, expect } from "@playwright/test";

export default class ToolBar {

    private page: Page;
    fridgeBtn: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.fridgeBtn = page.getByText('Холодильники');
    }
}