let Input = require('../elements/input');
let Button = require('../elements/button');
let BasePage = require('../base/bagePage');
let TextBox = require('../elements/textBox');
let BaseElement = require('../base/baseElement');

let emailInputLocator = by.xpath('//*[@id="email"]');
let passwordInputLocator = by.xpath('//*[@id="passwd"]');
let submitButtonLocator = by.xpath('//*[@id="SubmitLogin"]');
let errorMessageLoginLocator = by.css('.alert.alert-danger li');
let emailCreateInputLocator = by.css('#email_create');
let createAccButtonLocator = by.css('button#SubmitCreate');
let createAccountErrorLocator = by.css('#create_account_error');

class LoginPage extends BasePage {
    async userLogin(mail, pass) {
        await allure.createStep(`Login user ${mail} / ${pass}`, async () => {
            await this.getEmailInput().sendKeys(mail);
            await this.getPasswordInput().sendKeys(pass);
            await this.getSubmitButton().click();
        })();
    }

    async getErrorMessageLogin() {
        return await this.getErrorLogin().getText();
    }

    async clearEmailLogin() {
        await allure.createStep(`Clean email Login`, async () => {
            await this.getEmailInput().clear();
        })();
    }

    async createAccount(mail) {
        await allure.createStep(`Create account ${mail}`, async () => {
            await this.getEmailCreateInput().sendKeys(mail);
            await this.getCreateAccButton().click();
        })();
    }

    async getErrorMessageAccount() {
        return await this.getCreateAccountError().getText();
    }

    async clearEmailAccount() {
        await allure.createStep(`Clean email Account`, async () => {
            await this.getEmailCreateInput().clear();
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

    getErrorLogin() {
        return new TextBox(element(errorMessageLoginLocator), "Error Message");
    }

    getCreateAccButton() {
        return new Button(element(createAccButtonLocator), "Сreate Account button");
    }

    getEmailCreateInput() {
        return new Input(element(emailCreateInputLocator), "Email Create input");
    }

    getCreateAccountError() {
        return new TextBox(element(createAccountErrorLocator), "Error Message Account");
    }

    getBaseElement() {
        return new BaseElement(element(emailInputLocator), "Email input");
    }
}

module.exports = new LoginPage();
