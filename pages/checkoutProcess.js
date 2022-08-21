//Page Object Model for Checkout process of http://automationpractice.com/

exports.CheckoutProcess = class CheckoutProcess {

    constructor(page){
        this.page = page;
        this.ordercomment = page.locator("textarea[name='message']");
        this.productdescription = page.locator("td[class='cart_description']:visible")
        this.paycheck = page.locator("a[title='Pay by check.']")
        this.checkPaymentheading = page.locator(".page-subheading");
        this.confirmBtn = page.locator("#cart_navigation button")
        this.alert = page.locator(".alert.alert-success");
        this.summaryProceedChecoutBtn = page.locator("a[class='button btn btn-default standard-checkout button-medium']");
        
        this.addressProceedChecoutBtn = page.locator("button[name='processAddress']")
        this.shippingProceedChecoutBtn = page.locator("button[name='processCarrier']")
        this.agreeterms = page.locator("label[for='cgv']")
        
        
        this.signout = page.locator("a[title='Log me out']");
    }
}