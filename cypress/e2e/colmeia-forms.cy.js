describe('Colmeia Forms - Navegacao', () => {
  const formsPath = '/dashboard/campanha/colmeia-forms'

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/dashboard/campanha/bancos-de-dados')
  })

  it('Deve clicar em Colmeia Forms e validar o retorno da pagina', () => {
    cy.contains(/colmeia forms/i)
      .should('be.visible')
      .click()

    cy.location('pathname', { timeout: 10000 }).should('include', formsPath)

    cy.get('body').should('be.visible').then($body => {
      const retorno = $body.text().replace(/\s+/g, ' ').trim()
      const retornoLower = retorno.toLowerCase()
      const encontrouErro =
        retornoLower.includes('404') ||
        retornoLower.includes('not found') ||
        retornoLower.includes('erro') ||
        retornoLower.includes('error')

      cy.log(`Retorno Colmeia Forms: ${retorno.slice(0, 500)}`)
      cy.screenshot('colmeia-forms-retorno')

      expect(retorno, 'conteudo retornado pela pagina').to.not.equal('')
      expect(encontrouErro, 'pagina nao deve retornar erro visivel').to.be.false
    })
  })
})
