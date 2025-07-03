const { LogoutPage } = require('../pages/LogoutPage');
const Common = require('../common/Common')

Feature('Logout');

let logoutPage;
Before(async ({ I }) => {
    await Common.login(I);
    logoutPage = new LogoutPage(I)
});

Scenario('User logout', async({I}) => {
    logoutPage = new LogoutPage(I)
    await logoutPage.logout();
    await logoutPage.isLoginPageDisplay();
})
