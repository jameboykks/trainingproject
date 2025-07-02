const { expect } = require('chai'); // hoặc dùng chai nếu muốn đầy đủ
const { LoginPage } = require('../pages/LoginPage');

Feature('Login');


//Login successfull
Scenario('User login successfull and see Product page', async ({ I }) => {
    console.log("lalala")
    const username = 'standard_user'
    const pass = 'secret_sauce'
    // I.fillField('~test-Username', 'standard_user');
    // I.fillField('~test-Password', 'secret_sauce');
    // I.click('~test-LOGIN')
    // I.waitForElement('PRODUCTS', 10);
    // const heading = await I.grabTextFrom('PRODUCTS');
    const loginPage = new LoginPage(I);
    await loginPage.login(username, pass)
    const heading = await loginPage.getHeadingProductPage()
    console.log('Heading is', heading)
    expect(heading).to.equal('PRODUCTS', "Heading does not match");
    
});

// Login failed
// Scenario.only('User login failed and see msg err', async ({ I }) => {
//     const username = 'standard_user'
//     const passWrong = 'secret_sauce'

//     const loginPage = new LoginPage(I);
//     await loginPage.login(username, passWrong)
//     console.log('loi gi')
//     const msgErr = await loginPage.getMessageErr()
//     console.log('Message error is', msgErr)
//     expect(msgErr).to.equal('Username and password do not match any user in this service.')
// });