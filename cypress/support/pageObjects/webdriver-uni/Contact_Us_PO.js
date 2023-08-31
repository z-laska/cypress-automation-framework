class Contact_Us_PO {
    contactFormSubmission(firstName, lastName, email, message, $selector, textToLocate)  {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('[name="message"]').type(message);
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate, {timeout: 5000});
        cy.screenshot(); // deafult filename
        cy.screenshot("Make a contact us form submission"); // custom filename
    };
}
export default Contact_Us_PO;