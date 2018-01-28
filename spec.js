describe("Form tests", function(){
  it("inputs form data and checks for functionallity", function(){
    cy.visit("./app")

    cy.get("form > input").as("form").should("be.empty")
    cy.get("@form").eq(0).type("Job Title")
    cy.get("@form").eq(1).type("Pay")
    cy.get("form > textarea").type("Description")
    cy.get("@form").eq(2).click()

    cy.get("form > input").as("form").should("be.empty")

    cy.get("#job-listings > li").as("jobs")
    cy.get("@jobs").eq(0).as("new-job")
    cy.get("@new-job").find("h4").should("contain", "Title")
    cy.get("@new-job").find("small").eq(0).should("contain", "Pay")
    cy.get("@new-job").find("p").should("contain", "Description")
    cy.get("@new-job").find("small").eq(1).should("contain", "0 dinos are interested in this job")

    cy.screenshot()
  })
})
