import LoginPage from '../support/pages/LoginPage'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  context('fluxo principal', () => {
    it('faz login com credenciais validas', () => {
      cy.fixture('users').then(({ validUser }) => {
        LoginPage.login(validUser.email, validUser.password)

        cy.url().should('not.eq', `${Cypress.config('baseUrl')}/`)
        cy.get('input[type="password"]').should('not.exist')
      })
    })

    it('exibe os campos principais da tela', () => {
      LoginPage.emailInput.should('be.visible')
      LoginPage.passwordInput.should('be.visible')
      LoginPage.submitButton.should('be.visible')
    })

    it('exibe o link de recuperacao de senha', () => {
      LoginPage.forgotPassword.should('be.visible')
    })
  })

  context('validacoes', () => {
    it('mantem usuario na tela ao usar email invalido', () => {
      cy.fixture('users').then(({ invalidUser }) => {
        LoginPage.login(invalidUser.email, invalidUser.password)

        LoginPage.passwordInput.should('be.visible')
      })
    })

    it('mantem usuario na tela ao usar senha incorreta', () => {
      cy.fixture('users').then(({ validUser }) => {
        LoginPage.login(validUser.email, 'senhaerrada')

        LoginPage.passwordInput.should('be.visible')
      })
    })

    it('nao envia formulario vazio', () => {
      LoginPage.submit()

      LoginPage.emailInput.should('be.visible')
      LoginPage.passwordInput.should('be.visible')
    })

    it('nao envia formulario apenas com email', () => {
      cy.fixture('users').then(({ validUser }) => {
        LoginPage.fillEmail(validUser.email)
        LoginPage.submit()

        LoginPage.passwordInput.should('be.visible')
      })
    })

    it('nao envia formulario apenas com senha', () => {
      cy.fixture('users').then(({ validUser }) => {
        LoginPage.fillPassword(validUser.password)
        LoginPage.submit()

        LoginPage.emailInput.should('be.visible')
      })
    })

    it('valida formato de email', () => {
      LoginPage.fillEmail('emailsemarroba')
      LoginPage.fillPassword('123456')
      LoginPage.submit()

      LoginPage.emailInput.should('be.visible')
    })
  })

  context('seguranca', () => {
    it('mantem o campo de senha mascarado', () => {
      LoginPage.passwordInput.should('have.attr', 'type', 'password')
    })

    it('mantem a sessao depois do login', () => {
      cy.fixture('users').then(({ validUser }) => {
        LoginPage.login(validUser.email, validUser.password)

        cy.url().should('not.include', '/login')
        cy.visit('/')
        cy.url().should('not.include', '/login')
      })
    })
  })
})
