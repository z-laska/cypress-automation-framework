/// <reference types="Cypress" />

describe("Test 'Contact Us' form via Automation Test Store", () => {
    //positive scenario
    it("Should be able to submit a succesful submission via 'contact us' form", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("Joe")
        cy.get('#ContactUsFrm_email').type("joe364@example.com")
        cy.get('#ContactUsFrm_enquiry').type("You have cat to be kitten me right meow steal raw zucchini off kitchen counter, meow meow. Catch small lizards, bring them into house, then unable to find them on carpet behind the couch.")
        cy.get('.col-md-6 > .btn').click()

    });
})