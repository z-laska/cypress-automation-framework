/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
    before(() => {
        cy.fixture("products").then(data => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })
    it("Add specific items to basket", () => {
        globalThis.data.productName.forEach(element => {
            cy.addProductToBasket(element)
        })
        // wouldn't it be more efficient to create a custom command that has a list/array of product names as an argument
        // which would iterate over elements and check if the list of product names includes the current element's name?
        cy.get('.dropdown-toggle > .fa').click()
    });

})