class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(element => {
            cy.addProductToBasket(element).then(() => {
                // debugger
            });
        });
        // wouldn't it be more efficient to create a custom command that has a list/array of product names as an argument
        // which would iterate over elements and check if the list of product names includes the current element's name?
        cy.get('.dropdown-toggle > .fa').click().debug();
    }
}
export default AutoStore_HairCare_PO;