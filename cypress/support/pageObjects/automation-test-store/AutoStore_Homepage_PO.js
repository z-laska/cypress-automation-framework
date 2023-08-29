class AutoStore_Homepage_PO {
    visitHomepage() {
        cy.visit("https://automationteststore.com/");
    }

    clickOnHairCareLink() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}
export default AutoStore_Homepage_PO;