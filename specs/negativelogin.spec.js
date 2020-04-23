let homePage = require('../pageObject/homePage');
let loginPage = require('../pageObject/loginPage');

describe('Login', () => {
    it('Negative', async () => {
        await homePage.get();
        await homePage.clickLogin();
        await loginPage.userLogin(browser.params.input.mail, '');
        expect(await loginPage.getErrorMessage()).toEqual('Password is required.');

        await loginPage.userLogin('', 'pass');
        expect(await loginPage.getErrorMessage()).toEqual('Invalid password.');

        await loginPage.clearEmail();
        await loginPage.userLogin('test@gmai.com', 'pass');
        expect(await loginPage.getErrorMessage()).toEqual('Authentication failed.');
    });
});