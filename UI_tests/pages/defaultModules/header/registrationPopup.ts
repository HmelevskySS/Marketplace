import { Page, Locator, expect } from "@playwright/test";

export default class RegistrationPopup {

    private page: Page;
    registrationEmailField: Locator;
    submitNewEmailBtn: Locator;
    registerAgreementModal: Locator;
    acceptAgreementBtn: Locator;
    successRegisterModal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registrationEmailField = page.locator('[data-testid="register-form-email"]');
        this.submitNewEmailBtn = page.getByText('Продолжить');
        this.registerAgreementModal = page.locator('[data-testid="registerAgreement"]');
        this.acceptAgreementBtn = page.locator('[data-testid="agreeButton"]');
        this.successRegisterModal = page.locator('[data-testid="success-message-wrapper"]');
    }

}