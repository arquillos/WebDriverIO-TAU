class AddRemoveElements {
  get addElementButton() { return $('#content .example button') }
  get firstDeleteButton() { return $('#elements button') }

  clickAddElementButton() {
    this.addElementButton.waitForDisplayed();
    this.addElementButton.click();
  }

  clickFirstDeleteButton() {
    this.firstDeleteButton.waitForDisplayed();
    this.firstDeleteButton.click();
  }

  firstDeleteButtonExists() {
    this.firstDeleteButton.waitForExist();
  }

  firstDeleteButtonDoesNotExists() {
    this.firstDeleteButton.waitForExist(4000, true);
  }
}

module.exports = new AddRemoveElements()