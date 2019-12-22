class KeyPressed {
  get keyInputBox() { return $('#target') }
  get recognizedKeyPressed() { return $('#result') } 

  pressKey(key) {
    this.keyInputBox.waitForDisplayed();
    this.keyInputBox.keys(key);
  }

  clickInputBox() {
    this.keyInputBox.waitForDisplayed();
    this.keyInputBox.click();
  }

  getRecognizedText() {
      this.recognizedKeyPressed.waitForDisplayed();
      return this.recognizedKeyPressed.getText();
  }
}

module.exports = new KeyPressed()