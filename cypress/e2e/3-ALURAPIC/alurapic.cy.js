describe('Usabilidade tela inicial', () => {

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
    })

    /**Novos casos de teste */
    it('verifica mensagens tela inicial', ()=>{
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        cy.get('button[type="submit"]').should('be.disabled')
    })
})