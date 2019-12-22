class Login {
    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginButton() { return $('button') }

    enterUsername(username) {
        this.username.waitForDisplayed();
        this.username.setValue(username);
    }

    enterPassword(password) {
        this.password.waitForDisplayed();
        this.password.setValue(password);
    }

    clickButton() {
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }
}

module.exports = new Login()