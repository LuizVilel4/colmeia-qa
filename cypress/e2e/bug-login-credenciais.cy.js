import LoginPage from '../support/pages/LoginPage'

describe('Login com credenciais validas', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('nao deve exibir mensagem de erro ao usar credenciais validas', () => {
    LoginPage.login('qa@test.com', '123456')

    cy.get('body').then($body => {
      const texto = $body.text().toLowerCase()
      const exibiuErro =
        texto.includes('incorret') ||
        texto.includes('invalid') ||
        texto.includes('invalido') ||
        texto.includes('errad') ||
        texto.includes('wrong')

      if (exibiuErro) {
        cy.screenshot('login-valido-com-mensagem-de-erro')
      }

      expect(exibiuErro).to.be.false
    })
  })

  it('nao deve oferecer continuidade depois de erro no login', () => {
    LoginPage.login('qa@test.com', '123456')

    cy.get('body').then($body => {
      const texto = $body.text().toLowerCase()
      const temAcaoContinuar =
        texto.includes('continuar') ||
        texto.includes('continue') ||
        texto.includes('prosseguir') ||
        $body.find('button, a').toArray().some(el =>
          el.innerText?.toLowerCase().includes('continu')
        )

      if (temAcaoContinuar) {
        cy.screenshot('login-com-opcao-de-continuar-apos-erro')
      }

      expect(temAcaoContinuar).to.be.false
    })
  })
})
