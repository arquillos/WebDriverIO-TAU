const internetPage = require('../../pages/internet.page')
const loginPage = require('../../pages/login.page')
const loginData = require('../../data/login.data')

describe('Typing user/password in input text form', () => {
  beforeEach(() => {
    const loginLink =  21;
    browser.url('/');
    internetPage.clickLink(loginLink);
  })

  it('validates the form', () => {
    // Given
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';
    const expectedUrl = 'http://the-internet.herokuapp.com/secure'

    // When
    loginPage.username.clearValue();
    loginPage.enterUsername(username);
    loginPage.password.clearValue();
    loginPage.enterPassword(password);
    loginPage.clickButton();
    actualUrl = browser.getUrl();

    // Then
    expect(actualUrl).to.be.equal(expectedUrl);
  })

  it('validates the form using data from file', () => {
    // Given
    const expectedUrl = 'http://the-internet.herokuapp.com/secure'

    // When
    loginPage.username.clearValue();
    loginPage.enterUsername(loginData.userName);
    loginPage.password.clearValue();
    loginPage.enterPassword(loginData.password);
    loginPage.clickButton();
    actualUrl = browser.getUrl();

    // Then
    expect(actualUrl).to.be.equal(expectedUrl);
  })

})