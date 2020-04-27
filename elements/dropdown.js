let BaseElement = require('../base/baseElement');

class DropDown extends BaseElement {
    /* async selectOption(index) {
        await this.protractorElement.all(by.tagName('option')).then(async (options) => {
            await options[index].click();
        });
    }
*/
    async selectOption(text) {
        await this.protractorElement.all(by.cssContainingText('option', `${text}`)).click();
    }
}

module.exports = DropDown;
