class Checkboxes {
    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) }

    clickCheckBox(index) {
        console.log(`Clicking on checkbox number: ${index}`);
        this.checkboxes(index).waitForDisplayed();
        this.checkboxes(index).click();
    }
}

module.exports = new Checkboxes()