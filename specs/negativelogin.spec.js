let homePage = require('../pageObject/homePage');
let loginPage = require('../pageObject/loginPage');

describe('Login', () => {
    it('Negative', async () => {
        await homePage.get();
        await homePage.clickLogin();
        await loginPage.userLogin(browser.params.input.mail, '');
        expect(await loginPage.getErrorMessageLogin()).toEqual('Password is required.');

        await loginPage.userLogin('', 'pass');
        expect(await loginPage.getErrorMessageLogin()).toEqual('Invalid password.');

        await loginPage.clearEmailLogin();
        await loginPage.userLogin('test@gmai.com', 'pass');
        expect(await loginPage.getErrorMessageLogin()).toEqual('Authentication failed.');
    });
});