const internetPage = require('../../pages/internet.page')
const hoverPage = require('../../pages/hovers.page')

describe('Hovering over a picture', () => {

  it('Shows the associated picture name', () => {
    // Given
    const hoverLink = 25;
    const firstFigure = 3;
    const expectedFigureText = 'name: user1';
    browser.url('/');

    // When
    internetPage.clickLink(hoverLink);
    hoverPage.hoverOnFigure(firstFigure);
    let actualFigureText = hoverPage.getFigureDetails(firstFigure);

    // Then
    expect(actualFigureText).to.be.equal(expectedFigureText);
  })

})