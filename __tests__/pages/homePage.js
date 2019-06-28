class HomePage {

    constructor(page) {
        this.page = page;
    }

    async searchFor(word) {
        let idSearchIcon = 'search-button';
        await this.page.click('input[id=search-input-field]');
        await this.page.keyboard.type(word);
        await this.page.keyboard.press('Enter');
    }

}

module.exports = HomePage;