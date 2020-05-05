let BaseElement = require('../base/baseElement');

class CheckBox extends BaseElement {
    async isSelected() {
        return await this.getAttribute('class');
    }

    async checkOption(state) {
        if (!(this.protractorElement.isSelected()) && state) {
            await this.protractorElement.click();
        } else if (this.protractorElement.isSelected() && !state) {
            await this.protractorElement.click();
        }
    }
}

module.exports = CheckBox;