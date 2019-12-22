class JavascriptAlerts {
  get jSAlertButton() { return $('#content li:nth-child(1) button') }
  get jSConfirmButton() { return $('#content li:nth-child(2) button') }
  get jSPromptButton() { return $('#content li:nth-child(3) button') }
  get resultText() { return $('#result') }

  clickJSAlertButton() {
    this.jSAlertButton.waitForDisplayed();
    this.jSAlertButton.click();
  }

  clickJSConfirmButton() {
    this.jSConfirmButton.waitForDisplayed();
    this.jSConfirmButton.click();
  }

  clickJSPromptButton() {
    this.jSPromptButton.waitForDisplayed();
    this.jSPromptButton.click();
  }

  getAlertText() {
    return browser.getAlertText();
  }

  acceptAlert() {
    browser.acceptAlert();
  }

  dissmissAlert() {
    browser.dismissAlert();
  }

  sendJSPromptAlertText(text) {
      browser.sendAlertText(text);
  }

  getResultText() {
    this.resultText.waitForDisplayed();
    return this.resultText.getText();
  }
}

module.exports = new JavascriptAlerts()