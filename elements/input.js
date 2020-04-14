let BaseElement = require('../base/baseElement');

class Input extends BaseElement{
    async sendKeys(sometext){
        await this.protractorElement.sendKeys(sometext)
    }
}


module.exports = Input;