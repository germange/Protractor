let BaseElement = require('../base/baseElement');

class CheckBox extends BaseElement {
    async isSelected() {
        return await this.getAttribute('class');
    }

    async checkOption(state) {
        if (!(await this.isSelected()) && state) {
            await this.protractorElement.click();
        } else if (await this.isSelected() && !state) {
            await this.protractorElement.click();
        }
    }
}

module.exports = CheckBox;