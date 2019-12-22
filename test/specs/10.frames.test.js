const internetPage = require('../../pages/internet.page')
const framePage = require('../../pages/frames.page')
const iFramePage = require('../../pages/iframe.page')

describe('Access an iframe', () => {

  it('the text in the body can be changed', () => {
    // Given
    const frameLink = 22;
    const expectedText = 'New text in the iframe body';
    browser.url('/')

    // When
    internetPage.clickLink(frameLink);
    framePage.clickIFrame();
    browser.switchToFrame(iFramePage.iframe);
    iFramePage.sendTextToBody(expectedText);
    let actualText = iFramePage.getTextFromBody();

    // Then
    expect(actualText).to.be.equal(expectedText);
  })

})