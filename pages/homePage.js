//Page Object Model for Home Page of http://automationpractice.com/

exports.HomePage = class HomePage {

    constructor(page){
        this.page = page;
        this.signIn = page.locator("a[title='Log in to your customer account']");
        this.blouse = page.locator('#homefeatured a:has-text("Blouse")');

    }
    async goto(){
        this.page.goto('/');
    }

}