describe('Bancos de Dados - Criacao, listagem e arquivamento', () => {
  const bancoNome = `Banco Teste ${Date.now()}`

  beforeEach(() => {
    cy.visit('/dashboard/campanha/bancos-de-dados')
  })

  it('Deve criar, listar, arquivar e exibir o banco na lista de arquivados', () => {
    cy.contains('button', /criar/i)
      .should('be.visible')
      .click()

    cy.get('[role="dialog"], .fixed.inset-0')
      .should('be.visible')
      .within(() => {
        cy.get('input[type="text"], input[placeholder*="Nome"], input[placeholder*="nome"], input[placeholder*="Banco"], input[placeholder*="banco"]')
          .first()
          .clear()
          .type(bancoNome)

        cy.contains('button', /^salvar$/i)
          .should('be.visible')
          .click()
      })

    cy.contains(bancoNome, { timeout: 10000 })
      .should('be.visible')

    cy.contains(bancoNome)
      .closest('tr, [class*="table"], [class*="grid"], [class*="flex"]')
      .within(() => {
        cy.get('button')
          .last()
          .should('be.visible')
          .click()
      })

    cy.contains(bancoNome)
      .should('not.exist')

    cy.contains('button', /criar/i)
      .parents()
      .filter((_, el) => {
        const $el = Cypress.$(el)
        return $el.find('input[placeholder*="Pesquisar"], input[placeholder*="pesquisar"]').length > 0 &&
          $el.find('button').length >= 3
      })
      .first()
      .within(() => {
        cy.get('button')
          .first()
          .should('be.visible')
          .click()
      })

    cy.screenshot('banco-arquivado-nao-listado-em-itens-arquivados')

    cy.contains(bancoNome, { timeout: 10000 })
      .should('be.visible')
  })
})
