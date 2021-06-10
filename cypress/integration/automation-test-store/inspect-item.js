/// <reference types="cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });
  it("Click on the first item using find and eq methods", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
  it("Click on the first item using find and eq methods", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click().then((itemHeaderText) => {
      console.log('Selected item is :' + itemHeaderText.text())
    });
  });
});
