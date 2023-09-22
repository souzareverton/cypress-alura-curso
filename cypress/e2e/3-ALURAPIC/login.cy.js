describe('login de usuário alura pic', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', { // Stub que retorna 400 para o endpoint post /login
            statusCode: 400
        }).as('stubPost')
    })

    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.wait('stubPost')
        cy.contains('a', "(Logout)").should('be.visible');
    })

    it('fazer login de usuario invalido', () => {
        cy.login('Everton', '1234');
        cy.on('window:alert', (str) => {expect (str).to.equal('Invalid user name or password')});
    })
})