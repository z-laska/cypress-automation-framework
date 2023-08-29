class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000});
    };

    clickOnContactUsButton() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true}, {timeout: 8000});
    };
}
export default HomePage_PO;