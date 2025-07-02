const { LoginPage } = require('../pages/LoginPage');
const { LogoutPage } = require('../pages/LogoutPage');

Feature('Logout');

Before(async ({ I }) => {
    const username = 'standard_user'
    const pass = 'secret_sauce'

    const loginPage = new LoginPage(I);
    await loginPage.login(username, pass)
});

Scenario('User logout', async({I}) => {
    const logoutPage = new LogoutPage(I)
    await logoutPage.logout();
    await logoutPage.isLoginPageDisplay();
})
