/// <reference types="Cypress" />

describe("Test 'Contact Us' form via Automation Test Store", () => {
    before(() => {
        cy.fixture("userDetails").as("user")
    })

    it("Should be able to submit a succesful submission via 'contact us' form", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href$='contact']").click().then(function(linkText) {
            cy.log("Clicked on link using txt: " + linkText.text())
        })
        // cy.xpath("//a[contains(@href, 'contact')]").click();

        cy.get('@user').then(user => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("You have cat to be kitten me right meow steal raw zucchini off kitchen counter, meow meow. Catch small lizards, bring them into house, then unable to find them on carpet behind the couch.")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test has completed!")
    });
})