# Colmeia QA

Projeto de testes automatizados em Cypress para a aplicacao:

```text
https://teste-colmeia-qa.colmeia-corp.com
```

## Como rodar

Instale as dependencias:

```bash
npm install
```

Abra o Cypress:

```bash
npm run cy:open
```

Ou rode a suite em modo headless:

```bash
npm run cy:run
```

Para executar com navegador visivel:

```bash
npm run cy:run:headed
```

## Estrutura

```text
cypress/
  e2e/
    bancos-de-dados.cy.js
    bug-login-credenciais.cy.js
    colmeia-forms.cy.js
    login.cy.js
    seguranca-rotas.cy.js
  fixtures/
    users.json
  support/
    pages/LoginPage.js
    commands.js
    e2e.js
```

## Cenarios cobertos

- Login com dados validos e invalidos
- Validacoes basicas do formulario de login
- Mascara do campo de senha
- Protecao de rotas internas sem sessao
- Navegacao para Colmeia Forms
- Criacao, listagem e arquivamento de banco de dados

## Observacoes encontradas

Alguns cenarios falham porque reproduzem comportamentos encontrados durante os testes, como rota interna acessivel sem login e item arquivado que nao volta na listagem de arquivados. Os screenshots e videos ficam salvos em:

```text
cypress/screenshots
cypress/videos
```
