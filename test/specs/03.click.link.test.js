const internetPage = require('../../pages/internet.page')

describe('Clicking on a page link', () => {
  it('The brwoser navigates to that page (A/B Test)', () => {
    // Given
    const abTestLink = 1;
    const expectedUrl = 'http://the-internet.herokuapp.com/abtest';
    browser.url('/');

    // When click on A/B link and get the new page URL
    internetPage.clickLink(abTestLink);
    let actualUrl = browser.getUrl();

    // Then the new Url should be the expected one
    expect(expectedUrl).to.be.equal(actualUrl);
  })

})