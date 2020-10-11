/// <reference types="cypress" />

describe("The mouse actions", () => {
  it("Scroll element into view", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("I should be able to drag and drop a draggable item", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("I should be able to perform a double click", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#double-click").dblclick();
  });
  it("I should be able to hold down mouse click button on a given element", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#click-box").trigger('mousedown').then(($el) => {
        expect($el).to.have.css('background-color', 'rgb(0, 255, 0)');
    });
  });
});
