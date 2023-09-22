describe('Buscar fotos e dados', () => {
    
    it.only('buscar fotos do flavio', () => { //.only só roda esse teste
        const tempoEsperado = Math.random() * 2000;

        cy.request({
            method: 'GET',
            url: 'https://alurapic-api.onrender.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
            expect(res.duration).to.be.lte(tempoEsperado)
        });
    });
    it('fazer login do flavio', () => {
        cy.request({
            method: 'POST',
            url: 'https://alurapic-api.onrender.com/user/login',
            body: Cypress.env() // Busca as informações de login que estão no arquivo cypress.env.json, normalmente adicionado no gitignore para não ser commitado
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal("flavio@alurapic.com.br")
        });
    });
})