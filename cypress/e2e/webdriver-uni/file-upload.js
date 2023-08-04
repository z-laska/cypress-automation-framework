/// <reference types="Cypress" />

describe('Test file upload via webdriveruni', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
    })
    it('Upload a file', () => {
        cy.get('#myFile').selectFile("cypress/fixtures/laptop.png")
        cy.get('#submit-button').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')
        })
    });

    it('Upload no file', () => {
        cy.get('#submit-button').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })
    });
});