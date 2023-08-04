/// <reference types="Cypress" />

describe("Test 'Contact Us' form via WebdriverUni", () => {
    before(() => {
        cy.fixture('example').then(data => {
            // this.data = data
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    })

    //positive scenario
    it("Should be able to submit a succesful submission via 'contact us' form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')

        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!')
    });

    //negative scenario
    it("Should not be able to submit a succesful submission via 'contact us' form as all fields are required", () => {
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, '{backspace}', data.message, 'body', 'Error: all fields are required')
        //passing {backspace} is a workaround for type() not accepting an empty string
        // the other way would be to overwrite the type() command so that it behaves as desired when an empty string is passed as a parameter
    });
})