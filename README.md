# CodeceptJS Mobile Automation Project

## Công nghệ sử dụng

- **Framework kiểm thử:** CodeceptJS (cấu hình Appium cho mobile automation)
- **Ngôn ngữ:** JavaScript (Node.js)
- **Test runner:** CodeceptJS, Mocha (mochawesome reporter)
- **Assertion:** Chai
- **Mobile automation:** Appium, appium-uiautomator2-driver
- **Web automation:** Playwright, WebdriverIO
- **Báo cáo:** Mochawesome, Allure
- **Khác:** xlsx

## Các Scenario kiểm thử chính

1. **Đăng nhập thành công và vào trang sản phẩm**
   - Đăng nhập với tài khoản hợp lệ, kiểm tra hiển thị trang Product.
2. **Thêm sản phẩm vào giỏ và kiểm tra số lượng**
   - Thêm sản phẩm "Sauce Labs Backpack" vào giỏ, kiểm tra số lượng sản phẩm trong giỏ là 1.
3. **Đăng xuất khỏi hệ thống**
   - Đăng nhập, sau đó logout, kiểm tra quay lại trang đăng nhập.
4. **Thực hiện đặt hàng (checkout) thành công**
   - Đăng nhập, thêm sản phẩm vào giỏ, điền thông tin checkout, kiểm tra thông báo đặt hàng thành công.

---

> Project sử dụng Appium để kiểm thử ứng dụng mobile Android mẫu: `Android.SauceLabs.Mobile.Sample.app.2.7.1.apk`.
