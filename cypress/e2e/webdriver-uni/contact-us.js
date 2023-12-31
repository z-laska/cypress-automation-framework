import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO';
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO';
/// <reference types="Cypress" />

describe("Test 'Contact Us' form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000);
    const homepage_PO = new Homepage_PO();
    const contact_Us_PO = new Contact_Us_PO();
    before(() => {
        cy.fixture('example').then(data => {
            // this.data = data
            globalThis.data = data;
        });
    });

    beforeEach(() => {
        // cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
        homepage_PO.visitHomepage();
        cy.wait(3000);
        homepage_PO.clickOnContactUsButton();
        // cy.pause();
    });

    //positive scenario
    it("Should be able to submit a succesful submission via 'contact us' form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');

        // cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!');
        contact_Us_PO.contactFormSubmission(Cypress.env("first_name"), data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!');
    });

    //negative scenario
    it("Should not be able to submit a succesful submission via 'contact us' form as all fields are required", () => {
        // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, '{backspace}', data.message, 'body', 'Error: all fields are required');
        // passing {backspace} is a workaround for type() not accepting an empty string
        // the other way would be to overwrite the type() command so that it behaves as desired when an empty string is passed as a parameter
    
        contact_Us_PO.contactFormSubmission(data.first_name, data.last_name, '{backspace}', data.message, 'body', 'Error: all fields are required');
    });
})