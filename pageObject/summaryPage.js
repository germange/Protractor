let BasePage = require('../base/bagePage');
let BaseElement = require('../base/baseElement');
let TextBox = require('../elements/textBox');
let Button = require('../elements/button');
let Input = require('../elements/input');


let cartTitleTextBoxLocator = by.css('#cart_title');
let quantityPlusButtonLocator = by.css('.button-plus');
let quantityInPutLocator = by.css('.cart_quantity_input.form-control.grey');
let proceedToCheckoutButtonLocator = by.css('.standard-checkout.button-medium');
let deleteLastCartItemButtonLocator = by.css('.last_item a[class="cart_quantity_delete"]');
let homeButtonLocator = by.css('a.home');
let lastCartProductTextBoxtLocator = by.css('[id="product_3_13_0_0"]');


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

    async deleteLastCartItem() {
        await allure.createStep(`Delete Last Cart Item`, async () => {
            await this.getDeleteLastCartItemButton().click();
        })();
    }

    async homeButtonClick() {
        await allure.createStep(`Click Home button`, async () => {
            await this.getHomeButton().click();
        })();
    }

    async waitForLastCartItemToBeRemoved() {
        await (new TextBox(element(lastCartProductTextBoxtLocator), "Last Cart Item")).waitForInvisible();
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

    getDeleteLastCartItemButton() {
        return new Button(element(deleteLastCartItemButtonLocator), "Delete Last Cart Item Button");
    }

    getHomeButton() {
        return new Button(element(homeButtonLocator), "Home Button");
    }

    getBaseElement() {
        return new BaseElement(element(quantityPlusButtonLocator), "Quantity + Button");
    }
}

module.exports = new SummaryPage();
