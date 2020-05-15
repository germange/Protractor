let BaseElement = require('../base/baseElement');
let Button = require('../elements/button');
let TextBox = require('../elements/textBox');

let optionToSelectLocator = by.xpath(`//option[contains(text(), "TEXT_PLASE")]`);
let optionToWaitLocator = by.css(`.focus`);
let menuItemLocator = by.css(`.sfHover`);

class DropDown extends BaseElement {
    async open() {
        await this.hover();
        await this.click();
        await (new TextBox(element(optionToWaitLocator), `Dropdown Options`)).waitForPresenceOf();
    }

    async selectOption(text) {
        await this.open();
        let optionLocator = Object.assign({}, optionToSelectLocator);
        optionLocator.value = optionLocator.value.replace(`TEXT_PLASE`, text);
        await (new Button(element(optionLocator), `Select "${text}" `)).click();
    }

    async openMenu() {
        await this.hover();
        await (new TextBox(element(menuItemLocator), `Menu Options`)).waitForPresenceOf();
    }
}

module.exports = DropDown;
