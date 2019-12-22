const internetPage = require('../../pages/internet.page')

describe('Interaction with elements', () => {

  it.skip('When scrolls down the page to the bottom the footer is visible', () => {
    // Given
    browser.url('/');

    // When
    internetPage.scrollToPageFooter();

    // Then
    expect(internetPage.pageFooter.isDisplayedInViewport()).to.be.true;
  })

  it('When scrolls down (2) the page to the bottom the footer is visible', () => {
    // Given
    browser.url('/');

    // When
    internetPage.scrollToPageFooter2();

    // Then
    expect(internetPage.pageFooter.isDisplayedInViewport()).to.be.true;
  })

})