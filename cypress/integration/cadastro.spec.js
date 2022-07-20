describe('Cadastro' , () => {
    it('Usuário deve se tornar um entregador' , () =>{
        cy.visit("https://buger-eats.vercel.app");
        cy.get('a[href="/deliver"]').click()
        cy.get('h1').should('have.text' , 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Carlos Alberto Sampaio Dias',
            cpf: '064044443130',
            email: 'carlosalberto@gmail.com',
            whatsapp:'85997855477',
            endereco:{
                cep:'60525622',
                rua:'Valdemar Holanda',
                numero:'215',
                complemento:'baixos',
                bairro:'Joao XXIII',
                cidade:'Fortaleza/CE'

            },

            metodo_entrega:'Moto',
            cnh: 'cnh-digital.jpg'
        }
        
     
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)


        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)      

        
        cy.get('input[name="address"]').should('be.visible', entregador.endereco.rua)
        cy.get('input[name="district"]').should('be.visible', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('be.visible', entregador.endereco.city_uf)
        

        cy.contains('.delivery-method li', entregador.metodo_entrega).click() //função 'contains' serve para juntar um localizador css com texto de forma mais critériosa
        cy.get('input[accept^="image"]').attachFile('/images/'+ entregador.cnh)
        cy.get('form button[type="submit"]').click()
        
        // const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        
        // cy.get('.swal2-container .swal2-html-container')
        //     .should('be.visible', expectedMessage) 
        //     //const - objeto que nao vai mudar!






    })










})