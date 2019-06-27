class ResultsPage {

    constructor(page) {
        this.page = page;
    }

    async getNumberOfLinks(page) {
        await this.page.waitForSelector('h2 a');
        const links = await this.page.evaluate(() => {
            return Array.from(document.querySelectorAll('h2 a'));
        });
        return links.length;
    }
    
    async checkIfErrorExist(page) {
        await this.page.waitForXPath('//h3[1]');
        //const textError = (await page.$x('//h3[1]'));
        const text = await this.page.evaluate(() => {
            //return document.querySelector('div[class=msg__wrap]').textContent;
            return document.$x('//h3[1]').textContent;
        });
        return text.includes('did not match any documents.');
    }

}

module.exports = ResultsPage;