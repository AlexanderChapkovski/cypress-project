class AutoStore_HairCare_Po {
  addHairCareProductsToBasket() {
    data.productName.forEach(function (element) {
      cy.addProductToBasket(element).then(() => {
		  //debugger
	  });
    });
    cy.get(".dropdown-toggle > .fa").click().debug();
  }
}
export default AutoStore_HairCare_Po;
