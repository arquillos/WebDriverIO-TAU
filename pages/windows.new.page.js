class New {
    get windowText() { return $('h3') }

    getWindowText() {
        this.windowText.waitForDisplayed();
        return this.windowText.getText();
    }
}

module.exports = new New()