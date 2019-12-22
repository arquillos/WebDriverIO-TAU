const internetPage = require('../../pages/internet.page')
const keyPressedPage = require('../../pages/key.pressed.page')

describe('A key is pressed', () => {

  it('the key is recognized', () => {
    // Given
    const keysLink = 31;
    const expectedRecognizedText = 'You entered: A';
    browser.url('/');

    // When
    internetPage.clickLink(keysLink);
    keyPressedPage.clickInputBox();
    keyPressedPage.pressKey("A");
    let actualRecognizedKey = keyPressedPage.getRecognizedText();

   // Then
    expect(actualRecognizedKey).to.be.equal(expectedRecognizedText);
  })

})