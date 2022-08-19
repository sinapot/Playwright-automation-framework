//Page Object Model for Home Page

exports.HomePage = class HomePage {

    constructor(page){
        this.page = page;
        this.userName = page.locator("input[name='username']");
        this.password = page.locator("input[name='password']");
        this.loginBtn = page.locator("input[value='Log In']");
    }

    async goto(){
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

}