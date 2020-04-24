let BaseElement = require('../base/baseElement');

class DropDown extends BaseElement {
    async selectOption(index) {
        await this.protractorElement.all(by.tagName('option')).then(async (options) => {
            await options[index].click();
        });
    }
}

module.exports = DropDown;
