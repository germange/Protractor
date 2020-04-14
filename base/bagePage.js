class BasePage{
    async whaitFOrPageAvailable(){
       await this.getBaseElement().waitForVisible(); 
    }
}

module.exports = BasePage;