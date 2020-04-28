let TextBox = require('../elements/textBox');
let BasePage = require('../base/bagePage');
let BaseElement = require('../base/baseElement');

let userNameLocator = by.css('a.account');

class AccountPage extends BasePage {
    async getUserName() {
        return await this.getUser().getText();
    }

    getUser() {
        return new TextBox(element(userNameLocator), "User name");
    }

    getBaseElement() {
        return new BaseElement(element(userNameLocator), "User name");
    }
}

module.exports = new AccountPage();