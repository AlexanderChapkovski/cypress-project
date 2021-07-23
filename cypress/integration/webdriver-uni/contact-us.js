import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  const contact_Us_PO = new Contact_Us_PO();
  const homePage_PO = new HomePage_PO();

  before(() => {
    cy.fixture("example").then((data) => {
      //this.data = data;
      globalThis.data = data; //* how to use fixtures
    });
  });

  beforeEach(() => {
    homePage_PO.visitHomePage();
    homePage_PO.clickOn_ContactUs_Button();
    cy.pause();
  });

  it("Should be able to submit a successful submission via contact-us form", () => {
    cy.url().should("include", "contactus");
    cy.title().should("include", "WebDriver | Contact");
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.wait(3000);

    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "How can I learn Cypress?",
      "h1",
      "Thank You for your Message!2"
    );
  });

  it("Should not be able to submit a successful submission via contact-us form", () => {
    if (Cypress.isBrowser("firefox")) {
    } else {
      contact_Us_PO.contactForm_Submission(
        Cypress.env("first_name"),
        data.last_name,
        " ",
        "How can I learn Cypress?",
        "body",
        "Error: Invalid email address"
      );
      cy.log("Test completed");
    }
  });
});
