class DragAndDrop {

  // For user in web page: http://the-internet.herokuapp.com/drag_and_drop
  get squareA() { return $('#column-a') }
  get squareB() { return $('#column-b') }

  // For user in web page: http://crossbrowsertesting.github.io/drag-and-drop.html
  get originBox() { return $('#draggable')}
  get destinationBox() { return $('#droppable')}
  get destinationBoxText() { return $('#droppable p') }

  dragAndDrop() {
    this.squareA.waitForDisplayed();
    this.squareB.waitForDisplayed();
    this.squareA.dragAndDrop(this.squareB);
  }

  dropBoxToDestionation() {
    this.originBox.waitForDisplayed();
    this.destinationBox.waitForDisplayed();
    this.originBox.dragAndDrop(this.destinationBox);
  }

  getDestinationBoxText() {
    return this.destinationBox.getText();
  }

}

module.exports = new DragAndDrop()