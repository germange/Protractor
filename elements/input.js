let BaseElement = require('../base/baseElement');

class Input extends BaseElement {
    async sendKeys(sometext){
        await this.protractorElement.sendKeys(sometext)
    }
     
    async clear() {
        await this.protractorElement.clear();
    } 
}


module.exports = Input;