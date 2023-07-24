/// <reference types="Cypress" />

describe("Test 'Contact Us' form via WebdriverUni", () => {
    //positive scenario
    it("Should be able to submit a succesful submission via 'contact us' form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("McDonald")
        cy.get('[name="email"]').type("j.mcdonald@example.com")
        cy.get('[name="message"]').type("lorem ipsum")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    //negative scenario
    it("Should not be able to submit a succesful submission via 'contact us' form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Mary")
        cy.get('[name="last_name"]').type("Blowfish")
        cy.get('[name="message"]').type("lorem ipsum")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
})