/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('c#') // select by value
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery') // select by text


        // select maven by value and assert
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        // select testng by text and assert
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    });

})