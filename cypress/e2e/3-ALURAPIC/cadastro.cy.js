describe('cadastro de usuário alurapic', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('verifica mensagens de email inválido', () => {
        cy.register()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.get('input[formcontrolname="email"]').type('everton')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })

    it('verifica mensagens validacao', () => {
        cy.register() // é um gui_commands
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    it('verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.register()
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })

    const  usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it.only('registra novo usuário ' + usuario.fullName , () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    });

    it('verifica mensagens de usuário em caixa alta', () => {
        cy.register()
        cy.get('input[formcontrolname="userName"]').type('TESTE')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    })
})