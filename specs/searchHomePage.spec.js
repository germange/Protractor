let homePage = require('../pageObject/homePage');
let detailsPage = require('../pageObject/detailsPage');

describe('Search on home page', () => {
    it('Positive', async () => {
        await homePage.get();
        await homePage.searchTOpFor('dress');
        expect(await homePage.searchResultsCount()).toBeGreaterThan(0);

        await homePage.selectFirstResult();
        expect(await detailsPage.getItemName()).toContain('DRESS');
    });
});