class LoginPage {
  get emailInput() {
    return cy.get('input[type="email"], input[name="email"], input[placeholder*="mail"], input[placeholder*="Mail"]')
  }

  get passwordInput() {
    return cy.get('input[type="password"]')
  }

  get submitButton() {
    return cy.get('button[type="submit"], button').contains(/entrar|login|sign in/i)
  }

  get forgotPassword() {
    return cy.contains(/esqueceu|forgot/i)
  }

  visit() {
    cy.visit('/')
  }

  fillEmail(email) {
    this.emailInput.clear().type(email)
  }

  fillPassword(password) {
    this.passwordInput.clear().type(password)
  }

  submit() {
    this.submitButton.click()
  }

  login(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  }
}

export default new LoginPage()
