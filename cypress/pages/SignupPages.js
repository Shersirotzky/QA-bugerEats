

class SignupPages {
    
    go(){  cy.visit("https://buger-eats.vercel.app");
    cy.get('a[href="/deliver"]').click()
    cy.get('h1').should('have.text' , 'Cadastre-se para  fazer entregas')

    }

    fillForm(deliver) {
        cy.get('input[name="name"]').type(deliver.nome)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)


        cy.get('input[name="postalcode"]').type(deliver.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.endereco.numero)
        cy.get('input[name="address-details"]').type(deliver.endereco.complemento)      

        
        cy.get('input[name="address"]').should('be.visible', deliver.endereco.rua)
        cy.get('input[name="district"]').should('be.visible', deliver.endereco.bairro)
        cy.get('input[name="city-uf"]').should('be.visible', deliver.endereco.city_uf)
        

        cy.contains('.delivery-method li', deliver.metodo_entrega).click() //função 'contains' serve para juntar um localizador css com texto de forma mais critériosa
        cy.get('input[accept^="image"]').attachFile('/images/'+ deliver.cnh)
        cy.get('form button[type="submit"]').click()
    }

 

    


}

export default SignupPages