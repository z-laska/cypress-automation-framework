/// <reference types="Cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    //in cypress v.12 we need beforeEach - everything is cleared between tests!
    beforeEach(() => {
        cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) 
    })

    it("Check specific radio buttons", () => {
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check() //indexing starts at 0
    });

    it("Validate the states of specific radio buttons", () => {
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')

        cy.get("[value='cabbage']").should('be.disabled')
    });

})