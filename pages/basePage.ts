import { Page, Locator, expect } from '@playwright/test';
import LoginPopup from './defaultModules/header/loginPopup';
import RegistrationPopup from './defaultModules/header/registrationPopup';
import LocationPopup from './defaultModules/header/locationPopup';
import SiteSearch from './defaultModules/header/siteSearch';
import ToolBar from './defaultModules/header/toolBar';

export default class BasePage {
  protected page!: Page;
  siteLogo: Locator;
  loginPopup: LoginPopup;
  registrationPopup: RegistrationPopup;
  locationPopup: LocationPopup;
  siteSearch: SiteSearch;
  toolBar: ToolBar;

  constructor(page: Page) {
    this.page = page;
    this.siteLogo = page.locator('.logotypeImg');
    this.loginPopup = new LoginPopup(page);
    this.registrationPopup = new RegistrationPopup(page);
    this.locationPopup = new LocationPopup(page);
    this.siteSearch = new SiteSearch(page);
    this.toolBar = new ToolBar(page);
  }

  async checkLogoIsVisible() {
    expect(await this.siteLogo.isVisible()).toBe(true);
  }
}
