class Internet {

  get pageHeader() { return $('h1.heading') }
  get subHeading() { return $('h2') }
  get pageFooter() { return $('#page-footer') }
  get listStart() { return $('ul') }
  get listElements() { return this.listStart.$$('li') }
 
  specificListElement(index) { return this.listStart.$(`li:nth-child(${index})`) }
  
  listLink(index) { return this.listStart.$(`li:nth-child(${index}) a`) }

  getListElementsText() { 
    this.listElements.filter((element) => {
      console.log(`Element: ${element.getText()}`);
    })
  }

  getSpecificElementText(index) {
    this.specificListElement(index).waitForDisplayed();
    let elementText = this.specificListElement(index).getText();
    console.log(`Text for the ${index} element: ${elementText}`);
    return elementText;
  }

  clickLink(index) {
    this.listLink(index).waitForDisplayed();
    this.listLink(index).click();
  }

  scrollToPageFooter() {
    this.pageFooter.waitForDisplayed();
    this.pageFooter.moveTo();
  }

  scrollToPageFooter2() {
    this.pageFooter.waitForDisplayed();
    this.pageFooter.scrollIntoView();
  }
}

module.exports = new Internet()