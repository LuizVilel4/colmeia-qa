
Cypress.Commands.add('loginViaUI', (email = 'qa@test.com', password = '123456') => {
  cy.visit('/')
  cy.get('input[type="email"], input[name="email"]').type(email)
  cy.get('input[type="password"]').type(password)
  cy.get('button[type="submit"], button').contains(/entrar|login/i).click()
  cy.url().should('not.include', '/login')
})

Cypress.Commands.add('assertOnLoginPage', () => {
  cy.get('input[type="password"]').should('be.visible')
})
