import { test, expect } from '@playwright/test';
import SearchResultsPage from '../../pages/searchResultsPage/searchResultsPage'
import { searchRequests } from '../../data/consts'


test.describe('Site main search possitive and negative checks', () => {
  
  let locators: SearchResultsPage;
  test.use({ storageState: './UI_tests/cookieState/cookies.json' });

  test.beforeEach(async ({ page }) => {
    locators = new SearchResultsPage(page);
    await page.goto(`/`);
    await locators.checkLogoIsVisible();
  })


  test('Verify the search on the page returns correct results', async () => {

    await locators.siteSearch.searchBar.click();
    await locators.siteSearch.searchSuggestList.waitFor({state: 'visible'});
    await locators.siteSearch.searchBar.fill(searchRequests.correctOne);
    expect((await locators.siteSearch.suggestHighlights.first().innerText()).toLowerCase()).toContain(searchRequests.correctOne);
    await locators.siteSearch.searchBtn.click();
    await locators.pageTitle.waitFor({state: 'visible'});
    await locators.checkEachCardContainsWord();

  });

  test('Verify the search on the page returns correct results, if user types russian words on the English keyboard', async () => {

    await locators.siteSearch.searchBar.click();
    await locators.siteSearch.searchSuggestList.waitFor({state: 'visible'});
    await locators.siteSearch.searchBar.fill(searchRequests.incorrectOne);
    expect((await locators.siteSearch.suggestHighlights.first().innerText()).toLowerCase()).toContain(searchRequests.correctOne);
    await locators.siteSearch.searchBtn.click();
    await locators.pageTitle.waitFor({state: 'visible'});
    await locators.checkEachCardContainsWord();

  });

})