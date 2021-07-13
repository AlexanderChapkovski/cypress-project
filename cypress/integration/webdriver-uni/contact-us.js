/// <reference types="cypress" />

const { data } = require("cypress/types/jquery");

describe("Test Contact Us form via WebdriverUni", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      this.data = data;
      //globalThis.data = data;             //* how to use fixtures
    });
  });

  it("Should be able to submit a successful submission via contact-us form", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "contactus");
    cy.title().should("include", "WebDriver | Contact");
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get('[placeholder="Comments"]').type("Vasyliy");
    cy.get('[type="submit"]').click({ force: true });
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it.only("Should not be able to submit a successful submission via contact-us form", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    //cy.get('[placeholder="Comments"]').type('Vasya')      //! negative case
    cy.get('[type="submit"]').click({ force: true });
    cy.get("body").contains("Error: all fields are required");
    cy.log("Test completed");
  });
});
