/// <reference types="Cypress" />

describe("Verify Autocomplete dropwodn lists via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('B')
        // selecting by text
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Bagels'

            if (prod === productToSelect) {
                cy.wrap($el).click() //wrapping the element so that we use cypress click command, not the JQuery one
                // $el.trigger("click") - JQuery method

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)

                return false //to break out of the loop early
            }
        }).then(() => {
            cy.get('#myInput').type('p')
            // selecting by text
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                const productToSelect = 'Pepperoni'

                if (prod === productToSelect) {
                    cy.wrap($el).click() //wrapping the element so that we use cypress click command, not the JQuery one

                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)

                    return false //to break out of the loop early
                }
            })
        })
    });

})