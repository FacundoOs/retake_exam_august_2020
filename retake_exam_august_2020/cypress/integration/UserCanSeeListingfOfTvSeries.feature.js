describe("Use can see Listing of tv series", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      ulr: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:tvList.json",
    });
    cy.visit("/");
  });

  it("User can see logo", () => {
    cy.get('[data-cy="logo"]').should("exist");
  });

  it("User can see a list", () => {
    cy.get('[data-cy="image"]').should("exist");
  });
});
