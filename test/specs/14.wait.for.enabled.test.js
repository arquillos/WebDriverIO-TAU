const internetPage = require('../../pages/internet.page')
const dynamicControlsPage = require('../../pages/dynamic.controls.page')

describe('Given a dynamic control', () => {
  beforeEach(() => {
    const dynamicControlsLink = 13;
    browser.url('/');
    internetPage.clickLink(dynamicControlsLink);
  })

  it('Enable an input box let input text', () => {
    // Given

    // When
    dynamicControlsPage.clickEnableButton();

    // Then
    expect(dynamicControlsPage.isInputEnabled()).to.be.true;
  })

  it('The input box is diabled by default', () => {
    // Given

    // When

    // Then
    expect(dynamicControlsPage.isInputDisabled()).to.be.true;
  })
})