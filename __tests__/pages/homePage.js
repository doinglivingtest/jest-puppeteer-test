class HomePage {

    constructor(page) {
        this.page = page;
    }

    async getTitle() {
        return this.page.title();
    }

    async searchFor(word) {
        let idSearchIcon = 'search-button';
        //await this.page.click('div[id="search-button"]');
        await this.page.evaluate((idSearchIcon) => document.getElementById(idSearchIcon).click(), idSearchIcon);
        await this.page.waitForSelector('#search-input-field');
        await this.page.screenshot({path: 'screenshot.png'});
        await this.page.type('input[id=search-input-field]', word);
        await this.page.evaluate((idSearchIcon) => document.getElementById(idSearchIcon).click(), idSearchIcon);
    }

}

module.exports = HomePage;