describe('Protecao de rotas do dashboard', () => {
  const rotasProtegidas = [
    '/dashboard/campanha/bancos-de-dados',
    '/dashboard/campanha/colmeia-forms',
  ]

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  rotasProtegidas.forEach(rota => {
    it(`redireciona usuario sem sessao para o login: ${rota}`, () => {
      cy.visit(rota)

      cy.url().then(url => {
        if (!url.includes('/login')) {
          cy.screenshot(`rota-sem-protecao-${rota.replace(/\//g, '-')}`)
        }
      })

      cy.url().should('include', '/login')
    })
  })
})
