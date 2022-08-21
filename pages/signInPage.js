//Page Object Model for Sign In Page of http://automationpractice.com/

exports.SignInPage = class SignInPage {

    constructor(page){
        this.page = page;
        this.email = page.locator("#email");
        this.password = page.locator("#passwd");
        this.signInBtn = page.locator("button[id='SubmitLogin'] span");

    }
}