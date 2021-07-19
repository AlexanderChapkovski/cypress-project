/// <reference types="cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
  });

  it("Log information about all hair products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index " + index + " : " + $el.text());
    });
  });

  it("Add  specific product to basket", () => {
    //   cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //   if ($el.text().includes(productName)) {
    //     cy.wrap($el).click();
    //   }
    // });
    cy.selectProduct("Curls to straight Shampoo");
  });

  
  it("Add another specific product to basket", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
  it("Add another specific product to basket 2", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
