let BasePage = require('../base/bagePage');
let BaseElement = require('../base/baseElement');
let CheckBox = require('../elements/checkbox');
let Button = require('../elements/button');


let termsOfServiceCheckBoxLocator = by.css('#cgv');
let proceedToCheckoutButtonLocator = by.css('[name="processCarrier"]');


class ShippingPage extends BasePage {
    async checkTermsOfService() {
        await allure.createStep(`Check Terms Of Service`, async () => {
            await this.getTermsOfServiceCheckBox().checkOption(true);
        })();
    }

    async proceedToCheckoutClick() {
        await allure.createStep(`Click Proceed To Checkout Button`, async () => {
            await this.getProceedToCheckoutButton().click();
        })();
    }


    async termsOfServiceVisibility() {
        return await this.getTermsOfServiceCheckBox().isPresent();
    }


    getTermsOfServiceCheckBox() {
        return new CheckBox(element(termsOfServiceCheckBoxLocator), "Terms Of Service Check Box");
    }

    getProceedToCheckoutButton() {
        return new Button(element(proceedToCheckoutButtonLocator), "Proceed To Checkout Button");
    }

    getBaseElement() {
        return new BaseElement(element(termsOfServiceCheckBoxLocator), "Terms Of Service Check Box");
    }
}

module.exports = new ShippingPage();