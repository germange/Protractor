let BasePage = require('../base/bagePage');
let BaseElement = require('../base/baseElement');
let Button = require('../elements/button');
let TextBox = require('../elements/textBox');


let payByCheckButtonLocator = by.css('.cheque');
let confirmOrderButtonLocator = by.css('button.btn.btn-default.button-medium');
let successAlertTextBoxLocator = by.css('.alert.alert-success');


class PaymentPage extends BasePage {
    async payByCheckClick() {
        await allure.createStep(`Click Pay By Check Button`, async () => {
            await this.getPayByCheckButton().click();
        })();
    }

    async confirmOrderClick() {
        await allure.createStep(`Click Confirm Order Button`, async () => {
            await this.getConfirmOrderButton().click();
        })();
    }

    async confirmOrderButtonVisibility() {
        return await this.getConfirmOrderButton().isPresent();
    }

    async payByCheckButtonVisibility() {
        return await this.getPayByCheckButton().isPresent();
    }

    async getSuccessAlertText() {
        return await this.getSuccessAlertTextBox().getText();
    }

    getPayByCheckButton() {
        return new Button(element(payByCheckButtonLocator), "Pay By Check Button");
    }

    getConfirmOrderButton() {
        return new Button(element(confirmOrderButtonLocator), "Confirm Order Button");
    }

    getSuccessAlertTextBox() {
        return new TextBox(element(successAlertTextBoxLocator), "Success Alert TextBox");
    }

    getBaseElement() {
        return new BaseElement(element(payByCheckButtonLocator), "Pay By Check Button");
    }
}

module.exports = new PaymentPage();