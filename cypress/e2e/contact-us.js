/// <reference types="Cypress" />

describe("Test 'Contact Us' form via WebdriverUni", () => {
    //positive scenario
    it.only("Should be able to submit a succesful submission via 'contact us' form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe")
    });

    //negative scenario
    it("Should not be able to submit a succesful submission via 'contact us' form as all fields are required", () => {
        //cypress code
    });
})