module.exports = {
  // user data
  users: {
    valid: {
      username: 'standard_user',
      password: 'secret_sauce'
    },
    invalid: {
      username: 'invalid_user',
      password: 'wrong_password'
    },
    blankUsername: {
      username: '',
      password: 'secret_sauce'
    },
    blankPassword: {
      username: 'standard_user',
      password: ''
    },
  },
  
  // product data
  products: {
    productsName: {
      backpack: 'Sauce Labs Backpack',
      bikeLight: 'Sauce Labs Bike Light'
    }
    
  },

  // checkout data
  checkoutData: {
    firstName: 'John',
    lastName: 'Doe',
    zipCode: '12345'
  },

  // messages data
  // messages: {
  //   loginSuccess: 'PRODUCTS',
  //   loginError: 'Epic sadface: Username and password do not match any user in this service',
  //   lockedUser: 'Epic sadface: Sorry, this user has been locked out.',
  //   checkoutSuccess: 'THANK YOU FOR YOUR ORDER'
  // }
}; 