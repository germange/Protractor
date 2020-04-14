class BaseElement{
    constructor(protractorElement,name){
        this.protractorElement = protractorElement;
        this.elementName = name;
    }

    async click(){
        await this.protractorElement.click()
    }

    async waitForVisible(ms= 15000){
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(this.protractorElement), ms);
    }

}


module.exports = BaseElement;