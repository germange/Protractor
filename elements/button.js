let BaseElement = require('../base/baseElement');

class Button extends BaseElement {
    async multiclick(numClick) {
        for (let i = 0; i < numClick; i++) {
            await this.protractorElement.click();
        }
    }
}

module.exports = Button;