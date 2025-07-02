exports.LoginPage = class LoginPage {
    constructor(I) {
        this.I = I,
        this.usernameField = '~test-Username'
        this.passwordField = '~test-Password'
        this.btnLogin = '~test-LOGIN'
        this.msgErr = '//android.widget.TextView[contains(@text, "Username and password do not match")]'
        this.headingProductPage = '//android.widget.TextView[@text="PRODUCTS"]' 
    }

    async login(username, password) {
        await this.I.fillField(this.usernameField, username);
        await this.I.fillField(this.passwordField, password);
        await this.I.click(this.btnLogin)
    }

    // get heading PRODUCTS
    async getHeadingProductPage() {
        await this.I.waitForElement(this.headingProductPage, 5);
        const heading = await this.I.grabTextFrom(this.headingProductPage);
        return heading
    }
    
    // get err message when login failed
    async getMessageErr() {
        await this.I.waitForElement(this.msgErr, 20);
        const msgErr = await this.I.grabTextFrom(this.msgErr)
        return msgErr
    }
}