const { expect } = require('chai'); // hoặc dùng chai nếu muốn đầy đủ
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../common/testData');

Feature('Login');

let loginPage;
Before(async ({ I }) => {
    loginPage = new LoginPage(I);
});
//Login successfull
Scenario('User login successfull and see Product page', async ({ I }) => {

    let username = testData.users.valid.username;
    let password = testData.users.valid.password;

    await loginPage.login(username, password)

    const heading = await loginPage.getHeadingProductPage()
    console.log('Heading is', heading)
    expect(heading).to.equal('PRODUCTS', "Heading does not match");
    
});

// Login failed
Scenario('User login failed and see msg err', async ({ I }) => {
    let username = testData.users.invalid.username;
    let password = testData.users.invalid.password;

    await loginPage.login(username, password)
    
    const msgErr = await loginPage.getMessageErr()
    console.log('Message error is', msgErr)
    expect(msgErr).to.equal('Username and password do not match any user in this service.')

});

// Login failed 3 times
Scenario('User login failed 3 times', async ({ I }) => {
    let username = testData.users.invalid.username;
    let password = testData.users.invalid.password;

    for (let i =0; i < 3; i++) {
        await loginPage.login(username, password)
    }

    const msgErr = await loginPage.getMessageErr()
    console.log('Message error is', msgErr)

    // Assertion
    const expectErrmsg = 'Username and password do not match any user in this service.'
    const isCorrect = await loginPage.isMsgEqual(expectErrmsg);
    expect(isCorrect).to.be.true
});


// Login failed with blank username
Scenario('User login with blank user name and see msg err', async ({ I }) => {
    let username = testData.users.blankUsername.username;
    let password = testData.users.valid.password;

    await loginPage.login(username, password)
    
    const msgErr = await loginPage.getMessageErr()
    console.log('Message error is', msgErr)

    // Assertion
    const expectErrmsg = 'Username is required'
    const isCorrect = await loginPage.isMsgEqual(expectErrmsg);
    expect(isCorrect).to.be.true

});


// Login failed with blank password
Scenario('User login with blank password and see msg err', async ({ I }) => {
    let username = testData.users.valid.username;
    let password = testData.users.blankPassword.password;

    await loginPage.login(username, password)
    
    const msgErr = await loginPage.getMessageErr()
    console.log('Message error is', msgErr)

    // Assertion
    const expectErrmsg = 'Password is required'
    const isCorrect = await loginPage.isMsgEqual(expectErrmsg);
    expect(isCorrect).to.be.true
});

