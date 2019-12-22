class Dropdown {

  get dropDown() { return $('#dropdown') }

  getoption(index) { return this.dropDown.$(`option:nth-child(${index})`) }

  selectElement(index) {
    this.dropDown.waitForDisplayed();
    this.dropDown.click();
    //let selectedOption = $(`#dropdown option:nth-child(${index})`)
    let selectedOption = this.getoption(index);
    selectedOption.waitForDisplayed();
    selectedOption.click();
  }

  isElementselected(index) {
    let selectedOption = this.dropDown.$(`option:nth-child(${index})`)
    selectedOption.waitForDisplayed();
    return selectedOption.isSelected();
  }
}

module.exports = new Dropdown()