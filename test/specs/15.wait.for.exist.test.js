const internetPage = require('../../pages/internet.page')
const addRemoveElementsPage = require('../../pages/add.remove.elements.page')

describe('When the add button is clicked', () => {

  beforeEach(() => {
    const addRemoveElementsLink = 2;
    browser.url('/');
    internetPage.clickLink(addRemoveElementsLink);
  })

  it('a new "Delete" button appears on page', () => {
    // Given

    // When
    addRemoveElementsPage.clickAddElementButton();
    addRemoveElementsPage.firstDeleteButtonExists();

    // Then
    expect(addRemoveElementsPage.firstDeleteButtonExists).to.exist;
  })

  it('a new "Delete" button is created and deleted it is not drawn on page', () => {
    // Given

    // When
    addRemoveElementsPage.clickAddElementButton();
    addRemoveElementsPage.firstDeleteButtonExists();
    addRemoveElementsPage.clickFirstDeleteButton();

    // Then
    expect(addRemoveElementsPage.firstDeleteButtonDoesNotExists).to.exist;
  })
})