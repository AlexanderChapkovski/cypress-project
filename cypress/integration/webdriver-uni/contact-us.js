/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  it.only("Should be able to submit a successful submission via contact-us form", () => {
    cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.url().should('include', 'contactus');
    cy.title().should('include', 'WebDriver | Contact');
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.get('[name="first_name"]').type("Alex");
    cy.get('[name="last_name"]').type("Chapkouski");
    cy.get('[name="email"]').type("Sanchous@gmail.com");
    cy.get('[placeholder="Comments"]').type("Vasya");
    cy.get('[type="submit"]').click({ force: true });
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact-us form", () => {
    cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Alex");
    cy.get('[name="last_name"]').type("Chapkouski");
    cy.get('[name="email"]').type("Sanchous@gmail.com");
    //cy.get('[placeholder="Comments"]').type('Vasya')
    cy.get('[type="submit"]').click({ force: true });
    cy.get("body").contains("Error: all fields are required");
  });
});
