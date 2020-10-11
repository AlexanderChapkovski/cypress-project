// <reference types="cypress" />

describe("Verify autocomplete dropdown lists via dropdown webdriveruni", () => {
  it("Select specific product via autocomplete list", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list  >*")
      .each(($el, $index, $list) => {
        const productName = $el.text();
        const reqProductName = "Avacado";

        if (productName === reqProductName) {
          cy.get($el).click();
          cy.get("#submit-button").click();
          cy.url().should("include", reqProductName);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get("#myInputautocomplete-list  >*").each(($el, $index, $list) => {
          const productName = $el.text();
          const reqProductName = "Grapes";

          if (productName === reqProductName) {
            cy.get($el).click();
            cy.get("#submit-button").click();
            cy.url().should("include", reqProductName);
          }
        });
      });
  });
});
