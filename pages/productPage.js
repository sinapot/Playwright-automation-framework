//Page Object Model for Product Page of http://automationpractice.com/

exports.ProductPage = class ProductPage {

    constructor(page){
        this.page = page;
        this.addtocart = page.locator("button[name='Submit'] span");
        this.proceedCheckout = page.locator("a[title='Proceed to checkout'] span");

    }
}