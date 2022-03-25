import response from "../fixtures/detail.json";

describe("Detail Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&id=6574455",
      {
        fixture: "detail.json",
      }
    );
  });

  it("renders it", () => {
    cy.visit("/detail/6574455");
    cy.get("[data-testid=detailContainer]").should("exist");
    cy.wait(2000);
    cy.get("[data-testid=hitImage]")
      .should("exist")
      .should("have.attr", "src")
      .should("include", response.hits[0].imageURL);
    cy.get("[data-testid=userName]")
      .should("exist")
      .should("include.text", response.hits[0].user);
  });
});
