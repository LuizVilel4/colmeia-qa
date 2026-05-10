# Relatorio de pontos encontrados

## 1. Login com credenciais validas exibe mensagem de erro

**Modulo:** Login  
**Severidade:** Alta  
**Teste relacionado:** `cypress/e2e/bug-login-credenciais.cy.js`

### Passos

1. Acessar a tela inicial da aplicacao.
2. Informar o e-mail `qa@test.com`.
3. Informar a senha `123456`.
4. Clicar em entrar.

### Resultado esperado

O usuario deve acessar a area logada sem mensagem de erro.

### Resultado obtido

A aplicacao exibe mensagem relacionada a credenciais invalidas e ainda apresenta uma acao para continuar.

### Evidencia

O teste salva screenshot quando identifica a mensagem de erro ou a acao de continuar.

---

## 2. Banco arquivado nao aparece em itens arquivados

**Modulo:** Campanha / Bancos de Dados  
**Severidade:** Alta  
**Teste relacionado:** `cypress/e2e/bancos-de-dados.cy.js`

### Passos

1. Acessar `dashboard/campanha/bancos-de-dados`.
2. Clicar em criar.
3. Informar um nome para o banco.
4. Salvar.
5. Conferir se o banco aparece na listagem.
6. Arquivar o item criado.
7. Abrir a lista de itens arquivados.

### Resultado esperado

O banco criado deve sair da lista principal e aparecer em itens arquivados.

### Resultado obtido

O banco sai da lista principal, mas nao aparece na listagem de arquivados.

### Evidencia

Screenshot gerado em `cypress/screenshots/bancos-de-dados.cy.js`.

---

## 3. Rotas internas acessiveis sem login

**Modulo:** Seguranca / Rotas  
**Severidade:** Critica  
**Teste relacionado:** `cypress/e2e/seguranca-rotas.cy.js`

### Passos

1. Limpar cookies e local storage.
2. Acessar diretamente uma rota interna do dashboard.

Rotas avaliadas:

- `/dashboard/campanha/bancos-de-dados`
- `/dashboard/campanha/colmeia-forms`

### Resultado esperado

Um usuario sem sessao deve ser redirecionado para a tela de login.

### Resultado obtido

As telas internas carregam mesmo sem login.

### Evidencia

O teste salva screenshot quando a rota nao redireciona para login.
