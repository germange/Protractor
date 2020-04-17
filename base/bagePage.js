class BasePage{
    async whaitForPageAvailable(){
       await this.getBaseElement().waitForVisible(); 
    }
}

module.exports = BasePage;