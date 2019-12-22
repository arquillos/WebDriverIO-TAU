const internetPage = require('../../pages/internet.page')
const windowsPage = require('../../pages/windows.page')
const windowsNewPage = require('../../pages/windows.new.page')

describe('Clicking on a link to open a new window', () => {

  it('A new browser tab is opened', () => {
    // Given
    const windowsLink = 33;
    const newWindowUrl = 'http://the-internet.herokuapp.com/windows/new';
    let expectedText = 'New Window';
    browser.url('/')

    // When
    internetPage.clickLink(windowsLink);
    windowsPage.clickClickHere();
    browser.switchWindow(newWindowUrl);
    let actualText = windowsNewPage.getWindowText();

    // Then
    expect(actualText).to.be.equal(expectedText);

  })

})