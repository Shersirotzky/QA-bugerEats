/// <reference types="cypress"/>

describe("AcessarPagina", () => {
  it("Acessar pagina", () => {
    cy.visit("https://buger-eats.vercel.app");
    cy.get('#page-home main h1').should('have.text' , 'Seja um parceiro entregador pela Buger Eats')
    
  });
});
