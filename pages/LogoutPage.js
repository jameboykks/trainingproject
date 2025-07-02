exports.LogoutPage = class LogoutPage {
    constructor(I) {
        this.I = I,
        this.btnMenu = '~test-Menu'
        this.btnLogout ='~test-LOGOUT'
        this.idLoginPage = 'com.swaglabsmobileapp:id/action_bar_root'
    }

    async logout() {
        await this.I.click(this.btnMenu)
        await this.I.waitForElement(this.btnLogout, 5);
        await this.I.click(this.btnLogout)
    }
    async isLoginPageDisplay() {
        return this.I.seeElement({ id: this.idLoginPage });
    }

}