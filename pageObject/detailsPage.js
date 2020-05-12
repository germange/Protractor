let BasePage = require('../base/bagePage');
let BaseElement = require('../base/baseElement');
let TextBox = require('../elements/textBox');

let backToSearchButtonLocator = by.css('[name=back]');
let ltemNameTexboxLocator = by.css('h1');


class DetailsPage extends BasePage {
    async getItemName() {
        return await this.getltemNameTexbox().getText();
    }

    getltemNameTexbox() {
        return new TextBox(element(ltemNameTexboxLocator), "ltem Name Texbox");
    }

    getBaseElement() {
        return new BaseElement(element(backToSearchButtonLocator), "Back To Search  link");
    }
}

module.exports = new DetailsPage();