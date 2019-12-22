const internetPage = require('../../pages/internet.page')
const dynamicControlsPage = require('../../pages/dynamic.controls.page')

describe('Clicking a dynamic button', () => {

  it('Change from "remove" to "add"', () => {
		// Given
		const dynamicControlsLink = 13;
		const expectText = 'Add';
    browser.url('/');

		// When
		internetPage.clickLink(dynamicControlsLink);
		dynamicControlsPage.clickRemoveAddButton();
		dynamicControlsPage.waitUntilRemoveAddButtonChanged();
		let actualText = dynamicControlsPage.getRemoveAddButtonText();

		// Then
		expect(actualText).to.be.equal(expectText);
  })
})