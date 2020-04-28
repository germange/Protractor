let Input = require('../elements/input');
let Button = require('../elements/button');
let BasePage = require('../base/bagePage');
let TextBox = require('../elements/textBox');
let BaseElement = require('../base/baseElement');

let emailInputLocator = by.xpath('//*[@id="email"]');
let passwordInputLocator = by.xpath('//*[@id="passwd"]');
let submitButtonLocator = by.xpath('//*[@id="SubmitLogin"]');
let errorMessageLocator = by.css('.alert.alert-danger li');
let emailCreateInputLocator = by.css('#email_create');
let createAccButtonLocator = by.css('button#SubmitCreate');

class LoginPage extends BasePage {
    async userLogin(mail, pass) {
        await allure.createStep(`Login user ${mail} / ${pass}`, async () => {
            await this.getEmailInput().sendKeys(mail);
            await this.getPasswordInput().sendKeys(pass);
            await this.getSubmitButton().click();
        })();
    }

    async getErrorMessage() {
        return await this.getError().getText();
    }

    async clearEmail() {
        await allure.createStep(`Clean email`, async () => {
            await this.getEmailInput().clear();
        })();
    }

    async createAccount(mail) {
        await allure.createStep(`Create account ${mail}`, async () => {
            await this.getemailCreateInput().sendKeys(mail);
            await this.getCreateAccButton().click();
        })();
    }

    getEmailInput() {
        return new Input(element(emailInputLocator), "Email input");
    }

    getPasswordInput() {
        return new Input(element(passwordInputLocator), "Password input");
    }

    getSubmitButton() {
        return new Button(element(submitButtonLocator), "Submit button");
    }

    getError() {
        return new TextBox(element(errorMessageLocator), "Error Message");
    }

    getCreateAccButton() {
        return new Button(element(createAccButtonLocator), "Сreate Account button");
    }

    getemailCreateInput() {
        return new Input(element(emailCreateInputLocator), "Email Create input");
    }

    getBaseElement() {
        return new BaseElement(element(emailInputLocator), "Email input");
    }
}

module.exports = new LoginPage();
