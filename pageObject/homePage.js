let Button = require('../elements/button');
let BasePage = require('../base/bagePage');
let Input = require('../elements/input');
let TextBox = require('../elements/textBox');
let BaseElement = require('../base/baseElement');
let DropDown = require('../elements/dropdown');
let Image = require('../elements/image');

let loginbuttonLocator = by.css('a.login');
let searchTopInputLocator = by.css('#search_query_top');
let submitSearchTopButtonLocator = by.css('.button-search');
let searchResultsTextBoxLocator = by.css('.heading-counter');
let firstSearchResultButton = by.css('.product_list.row > li:nth-child(1) h5 > a');
let womenMenuDropdownLocator = by.css('#block_top_menu a[title="Women"]');
let womenMenuTShirtButtonLocator = by.css('.sfHover a[title="T-shirts"]');
let nItemImageLocator = by.css('.homefeatured li:nth-child(TEXT_PLASE)');
let addToCartButtonLocator = by.css('.homefeatured a[data-id-product="TEXT_PLASE"]');
let continueShoppingButtonLocator = by.css('span[title="Continue shopping"]');
let shoppingCartDropDownLocator = by.css('a[title="View my shopping cart"]');
let cartItemQuantityTextBoxLocator = by.css('.products > dt');
let cartItemRemoveButtonLocator = by.css('.first_item a[class="ajax_cart_block_remove_link"]');
let cartProductsNumberTextBoxLocator = by.css('.shopping_cart span[class="ajax_cart_quantity"]');
let cartFIrstItemImmageLocator = by.css('.first_item a[title="Faded Shor..."]');


class HomePage extends BasePage {
    async get() {
        await allure.createStep(`Open link`, async () => {
            await browser.get('http://automationpractice.com/index.php');
        })();
    }

    async clickLogin() {
        await allure.createStep(`Open login page`, async () => {
            await this.getLogInButton().click();
        })();
    }

    async searchTOpFor(query) {
        await allure.createStep(`Search for ${query}`, async () => {
            await this.getSearchTopInput().sendKeys(query);
            await this.getSubmitSearchTopButton().click();
        })();
    }

    async searchResults() {
        return await this.getsSearchResultsTextBox().getText();
    }

    async searchResultsCount() {
        let stringvalue = await this.searchResults();
        return parseInt(stringvalue, 10);
    }

    async selectFirstResult() {
        await allure.createStep(`Select First Search Result`, async () => {
            await this.getFirstSearchResultButton().hover();
            await this.getFirstSearchResultButton().click();
        })();
    }

    async selectTShirtMenuOption() {
        await allure.createStep(`Select T-Shirt Menu Option`, async () => {
            await this.getWomenMenuDropdown().openMenu();
            await this.getWomenMenuTShirtButton().click();
        })();
    }

    async addItemToCart(value) {
        await allure.createStep(`Add Item ToCart`, async () => {
            let itemImageLocator = Object.assign({}, nItemImageLocator);
            itemImageLocator.value = itemImageLocator.value.replace(`TEXT_PLASE`, value);
            await (new Image(element(itemImageLocator), `Item Image `)).hover();

            let addToCartButton = Object.assign({}, addToCartButtonLocator);
            addToCartButton.value = addToCartButton.value.replace(`TEXT_PLASE`, value);
            await (new Image(element(addToCartButton), `Add To Cart Button `)).click();

            await this.getContinueShoppingButton().waitForPresenceOf();
            await this.getContinueShoppingButton().click();
        })();
    }

    async cartItemQuantity() {
        await this.getShoppingCartDropDown().hover();
        return await this.getCartItemQuantityTextBox().count();
    }

    async removeCartItem() {
        await allure.createStep(`Remove 1-st Cart Item`, async () => {
            await this.getCartItemRemoveButton().click();
        })();
    }

    async cartDropDownClick() {
        await this.getShoppingCartDropDown().click();
    }

    async getCartProductsNumber() {
        return await this.getCartProductsNumberTextBox().getText();
    }

    async waitForFirstCartItemToBeRemoved() {
        await this.getCartFIrstItemImmage().waitForInvisible(3000);
    }

    getLogInButton() {
        return new Button(element(loginbuttonLocator), "Login Button");
    }

    getSearchTopInput() {
        return new Input(element(searchTopInputLocator), "Search Top input");
    }

    getSubmitSearchTopButton() {
        return new Button(element(submitSearchTopButtonLocator), "Submit Search button");
    }

    getsSearchResultsTextBox() {
        return new TextBox(element(searchResultsTextBoxLocator), "Search results texbox");
    }

    getFirstSearchResultButton() {
        return new Button(element(firstSearchResultButton), "First Search Resul");
    }


    getWomenMenuDropdown() {
        return new DropDown(element(womenMenuDropdownLocator), "Women Dropdown Menu");
    }

    getWomenMenuTShirtButton() {
        return new Button(element(womenMenuTShirtButtonLocator), "Women TShirt button");
    }

    getContinueShoppingButton() {
        return new Button(element(continueShoppingButtonLocator), "Continue Shopping Button");
    }

    getShoppingCartDropDown() {
        return new DropDown(element(shoppingCartDropDownLocator), "Shopping Cart DropDown");
    }


    getCartItemQuantityTextBox() {
        return new TextBox(element(cartItemQuantityTextBoxLocator), "Cart Item Quantity TextBox");
    }

    getCartItemRemoveButton() {
        return new Button(element(cartItemRemoveButtonLocator), "Cart Item Remove Button");
    }

    getCartProductsNumberTextBox() {
        return new TextBox(element(cartProductsNumberTextBoxLocator), "Cart Products Number TextBox");
    }

    getCartFIrstItemImmage() {
        return new Image(element(cartFIrstItemImmageLocator), "1-st Cart Item Immage")
    }

    getBaseElement() {
        return new BaseElement(element(loginbuttonLocator), "Login Button");
    }
}

module.exports = new HomePage();
