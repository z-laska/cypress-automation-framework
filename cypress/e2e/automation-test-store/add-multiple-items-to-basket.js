import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO"
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO"
/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

    before(() => {
        cy.fixture("products").then(data => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        autoStore_Homepage_PO.visitHomepage();
        autoStore_Homepage_PO.clickOnHairCareLink();
    })

    it("Add specific items to basket", () => {
        autoStore_HairCare_PO.addHairCareProductsToBasket();
    });

})