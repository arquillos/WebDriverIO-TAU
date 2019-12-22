class Hovers {
    figures(index) { return $(`.example .figure:nth-child(${index}) img`) }
    figureDetails(index) { return $(`.example .figure:nth-child(${index}) .figcaption h5`) }

    hoverOnFigure(index) {
        this.figures(index).waitForDisplayed();
        this.figures(index).moveTo(1, 1);
    }

    getFigureDetails(index) {
        console.log(`Getting figure details.......`)
        this.figureDetails(index).waitForDisplayed();
        let figureText = this.figureDetails(index).getText();
        console.log(`Figure text: ${figureText}`)
        return figureText
    }
 }

module.exports = new Hovers()