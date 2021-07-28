class Contact_Us_PO {
  contactForm_Submission(firstName, lastName, email, comment, $selector, textToLocate) {
    cy.get('[name="first_name"]').type(firstName + '{enter}');
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('[placeholder="Comments"]').type(comment);
    cy.get('[type="submit"]').click({ force: true });
    cy.get($selector).pause().contains(textToLocate, {timeout: 60000});
	cy.screenshot();
	cy.screenshot('Make example');
  }
}
export default Contact_Us_PO;
