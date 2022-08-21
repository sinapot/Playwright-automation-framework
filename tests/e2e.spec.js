// @ts-check

const { test, expect } =  require('@playwright/test');
const { HomePage } = require('../pages/homePage')
const { SignInPage } = require('../pages/signInPage')
import { user } from '../testdata/apTestData';
const { MyAccountPage } = require('../pages/myAccountPage');
const { ProductPage } = require('../pages/productPage');
const {CheckoutProcess} = require('../pages/checkoutProcess');


test('End to End test of purchasing in Automation practice',  async ({ page }) => {
    const homepage = new HomePage(page);
    const signinpage = new SignInPage(page);
    const myaccountpage = new MyAccountPage(page);
    const productpage = new ProductPage(page);
    const checkout = new CheckoutProcess(page);

    //go to homepage and click Sign In
    await homepage.goto()
    await homepage.signIn.click()

    //fill in email and password from test data file then click Sign In button
    await signinpage.email.type(user.email);
    await signinpage.password.type(user.password);
    await signinpage.signInBtn.click();

    //click my account button in My Account Page
    await myaccountpage.homeBtn.click()

    //on homepage click Blouse
    await homepage.blouse.click();

    //on product page click add to cart button
    await productpage.addtocart.click()
    await productpage.proceedCheckout.click()

    //on Checkout Process, validate Blouse item is in the list
    await expect(checkout.productdescription).toHaveText(/Blouse/)
    await checkout.summaryProceedChecoutBtn.click()
    
    //add order comment
    await checkout.ordercomment.fill(user.productcomment);
    await checkout.addressProceedChecoutBtn.click();

    //tick box agree terms
    await checkout.agreeterms.click();
    await checkout.shippingProceedChecoutBtn.click();

    //select checque payment
    await checkout.paycheck.click()
    await expect(checkout.checkPaymentheading).toHaveText(/Check payment/)
    await checkout.confirmBtn.click();

    //verify order complete
    await expect(checkout.alert).toHaveText(/Your order on My Store is complete./);
  });
