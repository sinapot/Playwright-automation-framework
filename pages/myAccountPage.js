//Page Object Model for My Account Page of http://automationpractice.com/

exports.MyAccountPage = class MyAccountPage {

    constructor(page){
        this.page = page;
        this.homeBtn = page.locator("a[title='Return to Home']");

    }
}