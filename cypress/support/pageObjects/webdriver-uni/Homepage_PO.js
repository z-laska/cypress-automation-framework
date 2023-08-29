class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"));
    };

    clickOnContactUsButton() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
    };
}
export default HomePage_PO;