/// <reference types="Cypress" />

describe("Cypress web security", () => {

    it.skip("Validate visiting two different domains", () => {
        cy.visit("http://webdriveruniversity.com/")
        cy.visit("http://automationteststore.com/")

        // as of cypress v12 it passes
    });


    it("Validate visiting two different domains via user actions", () => {
        cy.visit("http://webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()

        // as of cypress v12 it passes without disabling chromeWebSecurity
    });

    it('Origin command', () => {
        //no need for setting experimentalSessionAndOrigin to true in Cypress v12
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/")
        })

        cy.origin('automationteststore.com', () => {
            cy.visit("/")
        })

        // cy.visit("https://www.webdriveruniversity.com")
        // cy.visit("https://selectors.webdriveruniversity.com")

    });
})