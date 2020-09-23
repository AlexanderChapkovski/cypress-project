describe("Inspect Automation Test Store items using chain of commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('a[href*="product/category&path="]').contains("Makeup").click();
    cy.get('a[href*="product/category&path="]').contains("Skincare").click();
  });

  it.only("Navigating to specific product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('a[href*="product/category&path="]').contains("Makeup").click();
    cy.get('h1 .maintext').click().then(($headerText) => {
        const headerText = $headerText.text();
        expect(headerText).eq('Makeup');
        cy.log(headerText);
      });
  });
});
