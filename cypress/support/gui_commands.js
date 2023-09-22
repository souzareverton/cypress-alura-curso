
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha, {log: false}); // não exibe a senha no log 
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('register', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('h4', 'Register to embrace a new world!').should('be.visible')
})