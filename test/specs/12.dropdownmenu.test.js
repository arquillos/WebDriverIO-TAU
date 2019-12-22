const internetPage = require('../../pages/internet.page')
const dropDownPage = require('../../pages/dropdown.page')

describe('Selecting an option in a dropdown menu', () => {
  beforeEach(() => {
    const dropDownLink = 11;
    browser.url('/');
    internetPage.clickLink(dropDownLink);
  })

  it('selects the element', () => {
    // Given
    const dropDownOption = 3;

    // When
    dropDownPage.selectElement(dropDownOption);

    // Then
    expect(dropDownPage.isElementselected(dropDownOption)).to.be.true;
    expect(dropDownPage.isElementselected(1)).to.be.false; // Comment
    expect(dropDownPage.isElementselected(2)).to.be.false; // First Dropdown option

  })
})