// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
  it("Select specific option via select dropdown lists", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should('have.value', 'testng');
    cy.get("#dropdowm-menu-3").select("JQuery").contains('JQuery');
  });
});
