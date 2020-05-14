let BaseElement = require('../base/baseElement');

class Input extends BaseElement {
    async sendKeys(sometext) {
        await this.protractorElement.sendKeys(sometext);
    }

    async clear() {
        await this.protractorElement.clear();
    }

    async getValue() {
        return await this.protractorElement.getAttribute('value');
    }
}


module.exports = Input;