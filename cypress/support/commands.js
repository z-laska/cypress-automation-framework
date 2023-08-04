// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("navigateToWebdriverUniHomepage", () => {
    cy.visit("/")
});

Cypress.Commands.add("navigateToWebdriverUniCheckboxPage", () => {
    cy.visit("/Dropdown-Checkboxes-RadioButtons/index.html")
});

Cypress.Commands.add('selectProduct', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text().includes(productName)) { //JQuery, so we don't use cy.wrap()
            cy.wrap($el).click() //we don't want to use JQuery click, but cypress click command, so we need to use cy.wrap()
        }
    })
});

Cypress.Commands.add('addProductToBasket', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text() === productName) { //JQuery, so we don't use cy.wrap()
            cy.log($el.text())
            cy.get('.productcart').eq(index).click()
        }
    })
});

Cypress.Commands.add('webdriverUni_ContactForm_Submission', (firstName, lastName, email, message, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('[name="message"]').type(message)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(textToLocate)
});