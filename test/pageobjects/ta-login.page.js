import Page from "./page";

class LoginPage extends Page {
  /**
   * define elements
   */

  get usernameInput() {
    return $(
      "#loginfrm > div.wow.fadeIn > div:nth-child(1) > label > input[type=email]"
    );
  }
  get passwordInput() {
    return $(
      "#loginfrm > div.wow.fadeIn > div:nth-child(2) > label > input[type=password]"
    );
  }
  get loginButton() {
    return $("#loginfrm > button");
  }
  get headerImage() {
    return $('//img[@alt="Login"]');
  }

  get acceptCookies() {
    return $("#cookyGotItBtnBox > div > button");
  }

  /**
   * define or overwrite page methods
   */
  open() {
    super.open("login");
  }
  /**
   * your page specific methods
   */

  waitForloginPageToLoad() {
    if (!this.headerImage.isDisplayed()) {
      this.headerImage.waitForDisplayed(10000);
    }
  }

  login(username, password) {
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.acceptCookies.click();
    this.loginButton.click();
  }
}

export default new LoginPage();
