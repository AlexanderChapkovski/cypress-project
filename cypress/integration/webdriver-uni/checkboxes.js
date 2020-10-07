/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  it("Check and validate checkbox", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    cy.get("#checkboxes > :nth-child(3) > input").as("option-2");

    cy.get("@option-2").check().should("be.checked");
  });

  it("Uncheck and validate checkbox", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#checkboxes > :nth-child(3) > input").as("option-2");
    cy.get("@option-2").should("not.be.checked");
  });

  it("Check multiple checkboxes", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked');
    
  });
});
