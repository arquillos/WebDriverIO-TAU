const internetPage = require('../../pages/internet.page')
const checkboxPage = require('../../pages/checkboxes.page')

describe('Clicking on a checkbox option', () => {
  it('the option gets checked', () => {
    // Given
    const checkBoxLink =  6;
    browser.url('/');

    // When click on Checkboxes link
    internetPage.clickLink(checkBoxLink);
    checkboxPage.clickCheckBox(1);
    let checkboxSelected = checkboxPage.checkboxes(1).isSelected();

    // Then
    expect(checkboxSelected).to.be.true;
  })


})