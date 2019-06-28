class ResultsPage {

    constructor(page) {
        this.page = page;
    }
    
    async checkIfErrorExist(page) {
        await this.page.waitForXPath('//h3[1]');
        const text = await this.page.evaluate(() => {
            const title_h3 = document
            .evaluate(
                '//h3[1]',
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            )
            .singleNodeValue;

            return title_h3.textContent;

        });

        if(text.includes('did not match any documents.')){
            await this.page.screenshot({path: 'screenshot-fake.png'});
        }else{
            await this.page.screenshot({path: 'screenshot-valid-search.png'});
        }
        return text.includes('did not match any documents.');
    }

}

module.exports = ResultsPage;