const locators = require('../common/locators');
const { ScrollUtils } = require('../utilities/scrollElemet');
const { LoginPage } = require('./LoginPage');


exports.ProductPage = class ProductPage extends LoginPage {
    constructor(I) {
        super(I);
    }

    //Add product to Cart
    async addProductToCart(productName) {
        const productXpath = `//android.widget.TextView[@content-desc="test-Item title" and contains(@text,"${productName}")]`;
        await this.click(productXpath)
        await ScrollUtils.scrollToElement(this.I,locators.productsPage.textBtnAddCart)
        await this.waitForVisible(locators.productsPage.btnAddCart, 3);
        await this.click(locators.productsPage.btnAddCart)
    } 

    // Back to productPage
    async backToProductPageAfterSeeDetail() {
        await this.click(locators.productsPage.btnBackToProduct);
    }


    // Go to Cart Page
    async goToCart() {
        await this.click(locators.productsPage.btnCartIcon)
    }

    // Get product volumn in cart
    async getCartVolume() {
        const isVisible = await this.isVisible(locators.productsPage.cartCount);

        if (isVisible) {
            const count = await this.grabText(locators.productsPage.cartCount);
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