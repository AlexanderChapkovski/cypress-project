

describe("Inspect Automation Test Store items using chain of commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('a[href*="product/category&path="]').contains("Makeup").click();
    cy.get('a[href*="product/category&path="]').contains("Skincare").click();
  });

  it("Navigating to specific product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('a[href*="product/category&path="]').contains("Makeup").click();
    cy.get('h1 .maintext').click().then(($headerText) => {
        const headerText = $headerText.text();
        expect(headerText).eq('Makeup');
        cy.log(headerText);
      });
  });

  it.only("Validate properties of the Contact Us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    
    // Uses cypress commands and chaining
    cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain', 'First name')

    // Uses JQuery approach
    cy.contains('#ContactUsFrm','Contact Us Form').then(($contactUsForm) => {
        const firstNameText = $contactUsForm.find('#field_11').text();
        expect(firstNameText).to.contain('First name:');

        //Embedded commands
        cy.get('#field_11').then((text) => {
            cy.log(text);
            cy.log(text.text());
            
        })
    })


  });

});
