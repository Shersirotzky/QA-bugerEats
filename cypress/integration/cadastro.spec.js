import SignupPages from '../pages/SignupPages'




describe('Cadastro' , () => {
    it('Usuário deve se tornar um entregador' , () =>{
      

        var deliver = {
            nome: 'Carlos Alberto Sampaio Dias',
            cpf: '06404444313',
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
        
     var signup = new SignupPages()
        signup.go()
        signup.fillForm(deliver)
        
        
        
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        
        cy.get('.swal2-container .swal2-html-container')
            .should('be.visible', expectedMessage) 
        //     //const - objeto que nao vai mudar!

    



    })


   






})