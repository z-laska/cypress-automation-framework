class Contact_Us_PO {
    contactFormSubmission(firstName, lastName, email, message, $selector, textToLocate)  {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('[name="message"]').type(message);
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate, {timeout: 60000});
    };
}
export default Contact_Us_PO;