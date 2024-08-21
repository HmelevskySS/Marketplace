import { Page, Locator, expect } from "@playwright/test";

export default class LocationPopup {

    private page: Page;
    locationBtn: Locator;
    locationModal: Locator;
    locationInputField: Locator;
    clearLocationInputBtn: Locator;
    citiesDropdown: Locator;
    citiesDropdownItem: Locator;
    saveLocationBtn: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.locationBtn = page.locator('.styles_localityBtn__qrGFQ');
        this.locationModal = page.locator('[data-testid="modal"]');
        this.locationInputField = page.locator('input[aria-label="city"]');
        this.clearLocationInputBtn = page.locator('.select__control>.BaseSuggest-module__clearIndicator');
        this.citiesDropdown = page.locator('.select__menu');
        this.citiesDropdownItem = page.locator('.BaseSuggest-module__label'); //г. Гродно
        this.saveLocationBtn = page.getByText('Сохранить');
    }


    async openTheLocationPopup() {
        let currentCity = await this.locationBtn.innerText();
        await this.locationBtn.click();
        expect(await this.locationModal.isVisible()).toBe(true);
        expect(await this.locationInputField.inputValue()).toContain(currentCity);
    }
}