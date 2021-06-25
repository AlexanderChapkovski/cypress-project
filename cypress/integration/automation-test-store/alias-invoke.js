/// <reference types="cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Log information about all hair products", () => {
      cy.visit("https://automationteststore.com/");
      cy.get('a[href*="product/category&path="]').contains("Hair Care").click();

      cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
      cy.get('@productThumbnail').its('length').should('be.gt', 5);
      cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
      })

      it.only("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
  
        cy.get('.thumbnail').its('length').should('eq', 16);
        cy.get('.thumbnail').should('have.length', 16);
        cy.get('.thumbnail').find('.productcart').should('have.attr', 'title', 'Add to Cart');

        //another variant with Aliases
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')

        })

        it("Validate product thumbnail", () => {
            cy.visit("https://automationteststore.com/");
    
            //another variant with Aliases
            cy.get('.thumbnail').as('productThumbnail');
            cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
                cy.log($el.text());
            })    

            cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
            cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

            let itemTotalPrice = 0;
            cy.get('@saleItemPrice').then($linkText => {
                let arrPrice = $linkText.split('$');
                let totalSaleItemsPrice = arrPrice.map(Number).reduce((acc, el) => acc += el);
             itemTotalPrice += totalSaleItemsPrice;
            });

            cy.get('@itemPrice').then($linkText => {
                let arrPrice = $linkText.split('$');
                let totalItemsPrice = arrPrice.map(Number).reduce((acc, el) => acc += el);
             itemTotalPrice += totalItemsPrice;
            })
            .then(() => {
                cy.log(itemTotalPrice);
                expect(itemTotalPrice).to.eq(572.45);
            })

            })

    });