class AccountPage {
    constructor() {
      this.userName = element(by.xpath('//*[@id="header"]/div[2]//a/span'));
    };
async getUserName(){
    await this.userName.getText();
};
  }

  module.exports = new AccountPage();