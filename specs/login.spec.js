let homePage = require('../pageObject/homePage');
let loginPage = require('../pageObject/loginPage');
let accountPage = require('../pageObject/accountPage');

describe('Login', () => {
    it('Positive', async () => {
        await homePage.get();
        await homePage.clickLogin();
        await loginPage.userLogin(browser.params.input.mail, browser.params.input.pass);
        expect(await accountPage.getUserName()).toEqual('Jo Jo');
    });
});