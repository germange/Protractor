let BaseElement = require('../base/baseElement');

class TextBox extends BaseElement {
    async getText() {
        return await this.protractorElement.getText();
    }
}


module.exports = TextBox;