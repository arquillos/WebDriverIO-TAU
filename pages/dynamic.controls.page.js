class DynamicControls {
  get enableInput() { return $('#input-example input') }
  get enableButton() { return $('#input-example button') }
  get removeAddButton() { return $('#checkbox-example button') }

  clickEnableButton() {
    this.enableButton.waitForDisplayed();
    this.enableButton.click();
    this.enableInput.waitForEnabled();
  }

  isInputEnabled() {
    return this.enableInput.isEnabled();
  }

  isInputDisabled() {
    return this.enableInput.waitForEnabled(4000, true);
  }

  clickRemoveAddButton() {
    this.removeAddButton.waitForDisplayed();
    this.removeAddButton.click();
  }

  waitUntilRemoveAddButtonChanged() {
    browser.waitUntil(() => {
      return this.removeAddButton.getText() === 'Add';
    }, 6000, 'Expect button text to change')
  }

  getRemoveAddButtonText() {
    return this.removeAddButton.getText();
  }
}

module.exports = new DynamicControls()