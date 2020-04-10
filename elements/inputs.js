class Input {

    constructor(protractorElement,name){
this.protractorElement = protractorElement;
this.elementName = name;
    }

    async click(){
        await this.protractorElement.click()
    };

    async sendKeys(sometext){
        await this.protractorElement.sendKeys(sometext)
    };
}


module.exports = Input;