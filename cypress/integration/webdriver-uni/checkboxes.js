/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(() => {
    cy.log(Cypress.env("name"));
    cy.navigateTo_WebdriverUni_Checkbox_Page();
  });
  it("Check and validate checkbox", () => {
    cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    cy.get("#checkboxes > :nth-child(3) > input").as("option-2");

    cy.get("@option-2").check().should("be.checked");
  });

  it("Uncheck and validate checkbox", () => {
    cy.get("#checkboxes > :nth-child(3) > input").as("option-2");
    cy.get("@option-2").should("not.be.checked");
  });

  it("Check multiple checkboxes", () => {
    cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"]).should("be.checked");
  });

  /* === Test Created with Cypress Studio === */
  it('Click on all radio btns', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[value="green"]').check();
    cy.get('[value="blue"]').check();
    cy.get('[value="yellow"]').check();
    cy.get('[value="purple"]').check();
    /* ==== End Cypress Studio ==== */
  });
});
