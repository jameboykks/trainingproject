const { expect } = require('chai'); // hoặc dùng chai nếu muốn đầy đủ

const {ProductPage} = require('../pages/ProductPage')
const { Common } = require('../common/Common');
const testData = require('../common/testData');


Feature('Add to cart');

let productPage;
Before(async ({ I }) => {
    await Common.login(I);
    productPage = new ProductPage(I);
});

Scenario.only('User go to add product to cart', async ({I}) => {
    
    // Add to cart
    await productPage.addProductToCart(testData.products.productsName.backpack)

    // Check Volumn after Add product to cart
    await productPage.getCartVolume()
    // await expect(actualCartCoutn).to.equal(expectCartCoutn, 'The volumn does not match');

    // Assertion
    const expectCartCoutn = '1'
    const isCorrect = await productPage.isCartVolumeEqual(expectCartCoutn);
    expect(isCorrect).to.be.true;
    
})

// Check when user not adding product
Scenario('User not adding product to cart', async ({I}) => {

    // Check Volumn after Add product to cart
    const actualCartCoutn = await productPage.getCartVolumn()
    const expectCartCoutn = '1'
    await expect(actualCartCoutn).to.not.equal(expectCartCoutn, 'Chua co san pham nao trong gio hang');
    
})

