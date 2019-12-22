class Frames {

  get iFrameLink() { return $('#content li:nth-child(2) a') }

  clickIFrame() {
    this.iFrameLink.waitForDisplayed();
    this.iFrameLink.click();
  }

}

module.exports = new Frames()