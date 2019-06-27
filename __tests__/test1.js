const timeout = 14000
const HomePage = require('./pages/homePage');
const ResultsPage = require('./pages/resultsPage');

describe(
  'Home Page - Check if error message is displayed on search result',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('http://www.cnn.com/')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should not show error message on search result page', async () => {
      //let text = await page.evaluate(() => document.body.textContent)
      //expect(text).toContain('google')
      const homePage = new HomePage(page);
      await homePage.searchFor('NFL');
      const resultsPage = new ResultsPage(page);
      expect(await resultsPage.checkIfErrorExist()).not.toBe('true');
    }, 30000)

    it('should show error message on search result page', async () => {
      //let text = await page.evaluate(() => document.body.textContent)
      //expect(text).toContain('google')
      const homePage = new HomePage(page);
      await homePage.searchFor('NFL');
      const resultsPage = new ResultsPage(page);
      expect(await resultsPage.checkIfErrorExist()).toBeTruthy();
    }, 30000)
  },
  timeout
)