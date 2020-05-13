let Button = require('../elements/button');
let BasePage = require('../base/bagePage');
let Input = require('../elements/input');
let TextBox = require('../elements/textBox');
let BaseElement = require('../base/baseElement');

let loginbuttonLocator = by.css('a.login');
let searchTopInputLocator = by.css('#search_query_top');
let submitSearchTopButtonLocator = by.css('.button-search');
let searchResultsTextBoxLocator = by.css('.heading-counter');
let firstSearchResultButton = by.css('.product_list.row > li:nth-child(1) h5 > a');


class HomePage extends BasePage {
    async get() {
        await allure.createStep(`Open link`, async () => {
            await browser.get('http://automationpractice.com/index.php');
        })();
    }

    async clickLogin() {
        await allure.createStep(`Open login page`, async () => {
            await this.getLogInButton().click();
        })();
    }

    async searchTOpFor(query) {
        await allure.createStep(`Search for ${query}`, async () => {
            await this.getSearchTopInput().sendKeys(query);
            await this.getSubmitSearchTopButton().click();
        })();
    }

    async searchResults() {
        return await this.getsSearchResultsTextBox().getText();
    }

    async searchResultsCount() {
        let stringvalue = await this.searchResults();
        return parseInt(stringvalue, 10);
    }


    async selectFirstResult() {
        await this.getFirstSearchResultButton().click();
    }

    getLogInButton() {
        return new Button(element(loginbuttonLocator), "Login Button");
    }

    getSearchTopInput() {
        return new Input(element(searchTopInputLocator), "Search Top input");
    }

    getSubmitSearchTopButton() {
        return new Button(element(submitSearchTopButtonLocator), "Submit Search button");
    }

    getsSearchResultsTextBox() {
        return new TextBox(element(searchResultsTextBoxLocator), "Search results texbox");
    }

    getFirstSearchResultButton() {
        return new Button(element(firstSearchResultButton), "First Search Resul");
    }

    getBaseElement() {
        return new BaseElement(element(loginbuttonLocator), "Login Button");
    }
}
module.exports = new HomePage();
