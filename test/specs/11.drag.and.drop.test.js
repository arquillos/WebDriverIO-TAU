const internetPage = require('../../pages/internet.page')
const dragAndDropPage = require('../../pages/drag.and.drop.page.js')

describe('Interaction with elements', () => {

  // Webdriverio doesnt work with this page!
  it.skip('Drag and drop A square to B square interchange them', () => {
    // Given
    const dragAndDropLink = 10;
    browser.url('/');

    // When
    internetPage.clickLink(dragAndDropLink);
    dragAndDrop.dragAndDrop(dragAndDrop.squareA, dragAndDrop.squareB);
    browser.pause(3000);

    // Then

  })

  it('Drag square to target', () => {
    // Given
    const expectedText = 'Dropped!';
    browser.url('http://crossbrowsertesting.github.io/drag-and-drop.html');

    // When
    dragAndDropPage.dropBoxToDestionation();
    let actualText = dragAndDropPage.getDestinationBoxText();

    // Then
    expect(actualText).to.be.equal(expectedText);
  })

})