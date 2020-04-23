let Button = require('../elements/button');
let BasePage = require('../base/bagePage');

let loginbuttonLocator = by.css('a.login');


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

    getLogInButton() {
        return new Button(element(loginbuttonLocator), "Login Button");
    }

    getBaseElement() {
        return new Button(element(loginbuttonLocator), "Login Button");
    }
}
module.exports = new HomePage();
