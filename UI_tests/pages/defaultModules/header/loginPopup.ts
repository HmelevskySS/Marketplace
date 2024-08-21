import { Page, Locator, expect } from "@playwright/test";
import { userAccount } from "../../../data/consts";

export default class LoginPopup {

    private page: Page;
    accountBtn: Locator;
    accountBtnDropDown: Locator;
    enterBtn: Locator;
    loginModal: Locator;
    emailField: Locator;
    passwordField: Locator;
    submitFormBtn: Locator;
    closeModalBtn: Locator;
    phoneNumSubmitBtn: Locator;
    userDropdownEmail: Locator;
    logoutBtn: Locator;
    incorrectFieldError: Locator;
    registrationLink: Locator;
    basketCounter: Locator;


    constructor(page: Page) {
        this.page = page;
        this.accountBtn = page.locator('.styles_userToolsToggler__c2aHe');
        this.accountBtnDropDown = page.locator('.styles_list__RAL0l');
        this.enterBtn = page.locator('[data-testid="loginButton"]');
        this.loginModal = page.locator('[data-testid="modal"]');
        this.emailField = page.locator('[data-testid="login-form-email"]');
        this.passwordField = page.locator('[data-testid="login-form-password"]');
        this.submitFormBtn = page.locator('[data-testid="loginSubmit"]');
        this.closeModalBtn = page.locator('[data-testid="modalClose"]').last();
        this.phoneNumSubmitBtn = page.locator('[data-testid="editor-phone-submit"]');
        this.userDropdownEmail = page.locator('.userToolsSubtitle');
        this.logoutBtn = page.locator('.profile-logout-button');
        this.incorrectFieldError = page.locator('.ErrorMessage-module__message');
        this.registrationLink = page.locator('.LinkButton-module__caption')
        this.basketCounter = page.locator('[data-testid="header-count"]');
    }

    public async triggerTheLoginPopup() { //Click on the account button and then on the 'Войти'-button 
        await this.accountBtn.click();
        expect(await this.accountBtnDropDown.isVisible()).toBe(true);
        await this.enterBtn.click();
        expect(await this.loginModal.isVisible()).toBe(true);
    }

    public async logOutTheAccount() { //Logout the test account
        await this.accountBtn.click();
        expect(await this.accountBtnDropDown.isVisible()).toBe(true);
        expect(await this.userDropdownEmail.innerText()).toEqual(userAccount.email);
        await this.logoutBtn.click();
        await this.accountBtn.click();
        expect(await this.enterBtn.isVisible()).toBe(true);
    }

}