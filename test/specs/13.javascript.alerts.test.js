const internetPage = require('../../pages/internet.page')
const jSAlertPage = require('../../pages/javascript.alerts.page')

describe('When a JS alert is clicked', () => {
  beforeEach(() => {
    const alertsLink = 29;
    browser.url('/')
    internetPage.clickLink(alertsLink);
  })

  it('shows a text', () => {
    // Given
    const expectedText = 'I am a JS Alert';

    // When
    jSAlertPage.clickJSAlertButton();
    let actualText = jSAlertPage.getAlertText();
    console.log(`actual Alert text: ${actualText}`)
    console.log(`expected Alert text: ${expectedText}`)

    // Then
    expect(actualText).to.be.equal(expectedText);
  })

  it('close the shows a confirm text', () => {
    // Given
    const expectedText = 'You clicked: Ok';

    // When
    jSAlertPage.clickJSConfirmButton();
    jSAlertPage.acceptAlert();
    let actualText = jSAlertPage.getResultText();
    console.log(`actual Alert text: ${actualText}`)
    console.log(`expected Alert text: ${expectedText}`)

    // Then
    expect(actualText).to.be.equal(expectedText);
  })

  
  it('dismiss the alert shows a dismiss text', () => {
    // Given
    const expectedText = 'You clicked: Cancel';

    // When
    jSAlertPage.clickJSConfirmButton();
    jSAlertPage.dissmissAlert();
    let actualText = jSAlertPage.getResultText();
    console.log(`actual Alert text: ${actualText}`)
    console.log(`expected Alert text: ${expectedText}`)

    // Then
    expect(actualText).to.be.equal(expectedText);
  })

  it('input some text shows the text', () => {
    // Given
    const text = 'Hello!';
    const expectedText = `You entered: ${text}`;

    // When
    jSAlertPage.clickJSPromptButton();
    jSAlertPage.sendJSPromptAlertText(text);
    jSAlertPage.acceptAlert();
    let actualText = jSAlertPage.getResultText();
    console.log(`actual Alert text: ${actualText}`)
    console.log(`expected Alert text: ${expectedText}`)

    // Then
    expect(actualText).to.be.equal(expectedText);
  })
})