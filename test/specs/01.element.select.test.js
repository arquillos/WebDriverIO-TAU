const internetPage = require('../../pages/internet.page')

describe('Elements selections', () => {
  it('Get the homepage title text', () => {
    // Given
    const expectedPageTitle = 'The Internet';

    // When
    browser.url('/');
    let actualPageTitle = browser.getTitle();
    console.log(`The homepage title is: ${actualPageTitle}`);

    // Then
    expect(actualPageTitle).to.be.equal(expectedPageTitle);
  })

  it('Get text from an element using a type selector', () => {
    // Given
    const expectedElementText = 'Available Examples';

    // When
    browser.url('/');
    let actualElementText = $('h2').getText();
    console.log(`Using a type selector the text found is: ${actualElementText}`);

    // Then
    expect(actualElementText).to.be.equal(expectedElementText);
  })

  it('Get text from an element using a class selector', () => {
    // Given
    const expectedElementText = 'Welcome to the-internet';

    // When
    browser.url('/');
    let actualElementText = $('.heading').getText();
    console.log(`Using a class selector the text found is: ${actualElementText}`);

    // Then
    expect(actualElementText).to.be.equal(expectedElementText);
  })

  it('Get text from an element using an ID selector', () => {
    // Given
    const expectedElementText = 'Powered by Elemental Selenium';

    // When
    browser.url('/');
    let actualElementText = $('#page-footer').getText();
    console.log(`Using an ID selector the text found is: ${actualElementText}`);

    // Then
    expect(actualElementText).to.be.equal(expectedElementText);
  })

  it('Get text from an element using XPATH', () => {
    // Given
    const expectedElementText = 'Powered by Elemental Selenium';

    // When
    browser.url('/');
    let actualElementText = $("//*[@id='page-footer']").getText();

    // Then
    console.log(`Using XPATH selector the text found is: ${actualElementText}`);
    expect(expectedElementText).to.be.equal(actualElementText);
  })

  it('Get all the text from the links', () => {
    browser.url('/')
    internetPage.getListElementsText()
  })

  it('Get the third list element text', () => {
    // Given
    const expectedElementText = 'Basic Auth (user and pass: admin)';

    // When get the text from the third link
    browser.url('/');
    let actualElementText = internetPage.getSpecificElementText(3);
    console.log(`Actual element text: ${actualElementText}`);
    console.log(`Expected element text: ${expectedElementText}`);

    // Then the text is the expected one
    expect(expectedElementText).to.be.equal(actualElementText);
  })
})