class Iframe {

  get iframe() { return $('#mce_0_ifr') }
  get iframeBody() { return $('#tinymce') }

  sendTextToBody(text) {
    this.iframeBody.waitForDisplayed();
    this.iframeBody.clearValue();
    this.iframeBody.click();
    this.iframeBody.keys(text);
  }

  getTextFromBody() {
    this.iframeBody.waitForDisplayed();
    return this.iframeBody.getText();
  }
}

module.exports = new Iframe()