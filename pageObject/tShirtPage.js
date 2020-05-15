let Button = require('../elements/button');
let BasePage = require('../base/bagePage');
let TextBox = require('../elements/textBox');
let BaseElement = require('../base/baseElement');
let CheckBox = require('../elements/checkbox');


let tShirtHeaderLocator = by.css('.cat-name');
let listViewCheckBoxLocator = by.css('#list');
let addToCartButtonLocator = by.css('[title="Add to cart"]');
let productAddedTextBoxLocator = by.css('.icon-ok');
let proceedToCheckoutButtonLocator = by.css('a.btn.btn-default.button.button-medium');


class TShirtPage extends BasePage {
    async getTShirtHeader() {
        return await this.getTShirtHeaderTextBox().getText();
    }

    async swithToListview() {
        await allure.createStep(`Switch To List view`, async () => {
            await this.getListViewCheckBox().checkOption(true);
        })();
    }

    async clickAddToCartButton() {
        await allure.createStep(`Click Add To Cart`, async () => {
            await this.getAddToCartButton().click();
        })();
    }

    async getSuccessIconVisibility() {
        return await this.getProductAddedTextBox().isPresent();
    }

    async clickProceedToCheckout() {
        await allure.createStep(`Click Proceed To Checkout`, async () => {
            await this.getProceedToCheckoutButton().click();
        })();
    }

    getTShirtHeaderTextBox() {
        return new TextBox(element(tShirtHeaderLocator), "TShirt Header");
    }

    getListViewCheckBox() {
        return new CheckBox(element(listViewCheckBoxLocator), "List View checkbox");
    }

    getAddToCartButton() {
        return new Button(element(addToCartButtonLocator), "Add To Cart Button");
    }

    getProductAddedTextBox() {
        return new TextBox(element(productAddedTextBoxLocator), "Product Added icon");
    }

    getProceedToCheckoutButton() {
        return new Button(element(proceedToCheckoutButtonLocator), "Proceed To Checkout Button");
    }

    getBaseElement() {
        return new BaseElement(element(listViewCheckBoxLocator), "List View checkbox");
    }
}

module.exports = new TShirtPage();
