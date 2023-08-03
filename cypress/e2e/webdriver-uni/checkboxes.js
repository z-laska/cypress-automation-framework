/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it("Check and validate checkbox", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
    });

    it("Uncheck and validate checkbox", () => {
        cy.get('#checkboxes > :nth-child(5) > input').as('option-3') // #checkboxes is not necessary in selector
        cy.get('@option-3').uncheck().should('not.be.checked')
    });

    it("Check multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked') //still works even if you don't specify the checkboxes values
    });

})