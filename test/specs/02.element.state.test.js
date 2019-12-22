const internetPage = require('../../pages/internet.page')
const abtestPage = require('../../pages/abtest.page')
const assert = require('assert')

describe('Checking the state of the elements', () => {
  it('The footer should be displayed', () => {
    // Given

    // When
    browser.url('/');

    // Then
    assert(internetPage.pageFooter.isDisplayed(), 'Footer is not visible');
  })

  it('The header should exist', () => {
    // Given

    // When
    browser.url('/');

    // Then
    assert(internetPage.pageHeader.isExisting(), 'Header does not exists');
  })

  it('The footer should not be visible on the page viewport', () => {
    // Given

    // When
    browser.url('/');

    // Then
    assert(!internetPage.pageFooter.isDisplayedInViewport(), 'The footer is in the viewport');
  })

  it('The header shoul be on the viewport', () => {
    //Given

    // When
    browser.url('/');

    // Then
    assert(internetPage.pageHeader.isDisplayedInViewport(), 'The header is not in the viewport');
  })

  it('The subheader should be enabled', () => {
    // Given

    // When
    browser.url('/');

    // Then
    assert(internetPage.subHeading.isEnabled(), ' The subheader is not enabled');
  })

  it('Click on first link (A/B Test)', () => {
    // Given
    const expectedText = 'A/B Test Control';
    const alternativeExpectedText = 'A/B Test Variation 1';
    const abTestLink = 1;

    // When
    browser.url('/');
    internetPage.clickLink(abTestLink);
    let resultText = abtestPage.pageHeader.getText();
    console.log(`The actual text is ${resultText}`);

    // Then
    assert((resultText === expectedText) || (resultText === alternativeExpectedText), 'The A/B test header text is not the expected!');
  })
})