let BasePage = require('../base/bagePage');
let BaseElement = require('../base/baseElement');
let TextBox = require('../elements/textBox');
let Button = require('../elements/button');
let Input = require('../elements/input');


let cartTitleTextBoxLocator = by.css('#cart_title');
let quantityPlusButtonLocator = by.css('.button-plus');
let quantityInPutLocator = by.css('.cart_quantity_input.form-control.grey');
let proceedToCheckoutButtonLocator = by.css('.standard-checkout.button-medium');


class SummaryPage extends BasePage {
    async getSummaryPageTitle() {
        return await this.getSummaryPageHeaderTextBox().getText();
    }

    async quantityPlusClick() {
        await allure.createStep(`Click Quantity Plus Button`, async () => {
            await this.getQuantityPlusButton().multiclick(1);
        })();
    }

    async quantityInputValueWaitForUpdate() {
        await (new Input(element(quantityInPutLocator), "Input Value")).waitForTextToBePresentInElementValue(2000, '2');
    }

    async getQuantityInputValue() {
        return await this.getQuantityInPut().getValue();
    }

    async proceedToCheckoutClick() {
        await allure.createStep(`Click Proceed To Checkout Button`, async () => {
            await this.getProceedToCheckoutButton().click();
        })();
    }

    getSummaryPageHeaderTextBox() {
        return new TextBox(element(cartTitleTextBoxLocator), "Summary Page Title");
    }

    getQuantityPlusButton() {
        return new Button(element(quantityPlusButtonLocator), "Quantity + Button");
    }

    getQuantityInPut() {
        return new Input(element(quantityInPutLocator), "Quantity InPut");
    }

    getProceedToCheckoutButton() {
        return new Button(element(proceedToCheckoutButtonLocator), "Proceed To Checkout Button");
    }

    getBaseElement() {
        return new BaseElement(element(quantityPlusButtonLocator), "Quantity + Button");
    }
}

module.exports = new SummaryPage();
