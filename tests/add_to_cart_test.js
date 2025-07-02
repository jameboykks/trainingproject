const { expect } = require('chai'); // hoặc dùng chai nếu muốn đầy đủ

const { LoginPage } = require('../pages/LoginPage');
const {ProductPage} = require('../pages/ProductPage')


Feature('Add to cart');

// Tự động login trước mỗi Scenario
Before(async ({ I }) => {
    const username = 'standard_user'
    const pass = 'secret_sauce'

    const loginPage = new LoginPage(I);
    await loginPage.login(username, pass)
});


// Login
// Scenario ('User login', async ({I}) => {
    
//     const username = 'standard_user'
//     const pass = 'secret_sauce'

//     const loginPage = new LoginPage(I);
//     await loginPage.login(username, pass)
// })

Scenario('User go to add product to cart', async ({I}) => {
    const productName='Sauce Labs Backpack'
    const expectCartCoutn = '1'

    // Add to cart
    const productPage = new ProductPage(I)
    await productPage.addProductToCart(productName)

    // Check Volumn after Add product to cart
    const actualCartCoutn = await productPage.getCartVolumn()
    await expect(actualCartCoutn).to.equal(expectCartCoutn, 'The volumn does not match');
    
})

// Check when user not adding product
// Scenario.only('User not adding product to cart', async ({I}) => {
//     const productPage = new ProductPage(I)

//     // Check Volumn after Add product to cart
//     const actualCartCoutn = await productPage.getCartVolumn()
//     const expectCartCoutn = '1'
//     await expect(actualCartCoutn).to.not.equal(expectCartCoutn, 'Chua co san pham nao trong gio hang');
    
// })

