/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of all users", () => {
    const userDetails = [];
    let total = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        let i;
        for (i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            total += Number(userDetails[i]);
          }
          cy.log(userDetails[i]);
        }
        expect(total).to.be.eq(322);
      });
  });

  it.only("Calculate and assert the age of a given user based on last name", () => {
    cy.get("#thumbnail-1 td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
		if (text.includes("Woods")) {
        cy.get("#thumbnail-1 td:nth-child(2)")   //* super css method
          .eq(index)
          .next()
          .then(function ($age) {
            const age = $age.text();
            expect(age).to.equal("80");
          });
      }
    });
  });
});
