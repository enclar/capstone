// login test cases
describe("does login work spec", () => {
  it("visit login page", () => {
    cy.visit("localhost:5173/login");
  })

  it("check if typing appears in input boxes", () => {
    cy.get("#login-email-input").type("anne-lee@mail.com").should("have.value", "anne-lee@mail.com");
    cy.get("#login-password-input").type("welcome12").should("have.value", "welcome12");
  })

  it("check for login fail with wrong password", () => {
    cy.get("#login-btn").click();

    cy.checkToastMessage("login-fail-msg", "Wrong password").wait(6500);
  })

  it("check for login fail with non-existent account", () => {
    cy.get("#login-email-input").clear().type("ann-lee@mail.com");
    cy.get("#login-password-input").clear().type("welcome123{enter}");

    cy.checkToastMessage("login-fail-msg", "No staff account associated with this email").wait(6500);
  })

  it("check for login fail with wrong account type", () => {
    cy.get("#login-email-input").clear().type("anne-lee@mail.com");
    cy.get("#acc-type-select").select("client");
    cy.get("#login-btn").click();

    cy.checkToastMessage("login-fail-msg", "No client account associated with this email").wait(6500);
  })

  it("check for staff login pass", () => {
    cy.get("#acc-type-select").select("staff");
    cy.get("#login-btn").click();

    cy.url().should("include", "/projects");
    cy.get("#welcome-msg").contains("anne lee");
  })
})