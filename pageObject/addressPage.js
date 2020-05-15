let BasePage = require('../base/bagePage');
let BaseElement = require('../base/baseElement');
let Button = require('../elements/button');


let proceedToCheckoutButtonLocator = by.css('[name="processAddress"]');
let deliveryAddressDropDownLocator = by.css('#id_address_delivery');


class AddressPage extends BasePage {
    async proceedToCheckoutClick() {
        await allure.createStep(`Click Proceed To Checkout Button`, async () => {
            await this.getProceedToCheckoutButton().click();
        })();
    }

    getProceedToCheckoutButton() {
        return new Button(element(proceedToCheckoutButtonLocator), "Proceed To Checkout Button");
    }

    getBaseElement() {
        return new BaseElement(element(deliveryAddressDropDownLocator), "Delivery Address DropDown");
    }
}

module.exports = new AddressPage();
