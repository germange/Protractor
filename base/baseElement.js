class BaseElement {
    constructor(protractorElement, name) {
        this.protractorElement = protractorElement;
        this.elementName = name;
    }

    async click() {
        await this.protractorElement.click();
    }

    async hover() {
        await browser.actions().mouseMove(this.protractorElement).perform();
    }

    async waitForVisible(ms = 15000) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(this.protractorElement), ms);
    }

    async waitForPresenceOf(ms = 15000) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.protractorElement), ms);
    }
}


module.exports = BaseElement;