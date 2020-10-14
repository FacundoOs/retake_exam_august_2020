describe("Use can see Listing of tv series", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:tvList.json",
    });
    cy.visit("/");
  });

  it("User can see logo", () => {
    cy.get('[data-cy="logo"]').should("exist");
  });

  it("User can see footer", () => {
    cy.get('[data-cy="footer-fixed"]').should("exist");
  });

  it("User can see images", () => {
    cy.get('[data-cy="display-show"]').children().should('have.length', 10)
    cy.get('[data-cy="image"]').should("exist");
  });
});
