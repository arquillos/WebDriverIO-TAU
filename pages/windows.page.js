class Windows {

  get clickHereLink() { return $('.example a') }

  clickClickHere() {
    this.clickHereLink.waitForDisplayed();
    this.clickHereLink.click();
  }

}

module.exports = new Windows()