const locators = require('../common/locators');
const { ScrollUtils } = require('../utilities/scrollElemet');
const { LoginPage } = require('./LoginPage');


exports.ProductPage = class ProductPage extends LoginPage {
    constructor(I) {
        super(I)
    }

    //Add product to Cart
    async addProductToCart(productName) {
        const productXpath = `//android.widget.TextView[@content-desc="test-Item title" and contains(@text,"${productName}")]`;
        await this.I.click(productXpath)
        await ScrollUtils.scrollToElement(this.I,locators.productsPage.textBtnAddCart)
        await this.I.waitForElement(locators.productsPage.btnAddCart, 3);
        await this.I.click(locators.productsPage.btnAddCart)
    } 

    // Go to Cart Page
    async goToCart() {
        await this.I.click(locators.productsPage.btnCartIcon)
    }

    // Get product volumn in cart
    async getCartVolume() {
        const isVisible = await this.I.grabNumberOfVisibleElements(locators.productsPage.cartCount);

        if (isVisible > 0) {
            const count = await this.I.grabTextFrom(locators.productsPage.cartCount);
            return count
        }
        else {
            return '0'
        }
    }

    // Thêm hàm kiểm tra riêng
    async isCartVolumeEqual(expectedCount) {
        const actualCount = await this.getCartVolume();
        return actualCount === expectedCount;
    }
} 