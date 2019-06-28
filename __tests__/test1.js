const timeout = 15000
const HomePage = require('./pages/homePage');
const ResultsPage = require('./pages/resultsPage');

describe(
  'Home Page - Check if error message is displayed on search result',
  () => {
    let page
    beforeEach(async () => {
      page = await global.__BROWSER__.newPage()
      //We should set the screen size due to puppeteer open the browser in 800x600 by default
      const override = Object.assign(page.viewport(), {width: 1366});
      await page.setViewport(override);
      await page.goto('http://www.cnn.com/')
    }, timeout)

    afterEach(async () => {
      await page.close()
    })

    it('should not show error message on search result page', async () => {
      const homePage = new HomePage(page);
      await homePage.searchFor('NFL');
      const resultsPage = new ResultsPage(page);
      expect(await resultsPage.checkIfErrorExist()).toBe(false);
    })

    it('should show error message on search result page', async () => {
      const homePage = new HomePage(page);
      await homePage.searchFor('NFLFAKE');
      const resultsPage = new ResultsPage(page);
      expect(await resultsPage.checkIfErrorExist()).toBeTruthy();
    })
  },
  timeout
)