class Button {

    constructor(protractorElement,name){
this.protractorElement = protractorElement;
this.elementName = name;
    }

    async click(){
        await this.protractorElement.click()
    };
}


module.exports = Button;