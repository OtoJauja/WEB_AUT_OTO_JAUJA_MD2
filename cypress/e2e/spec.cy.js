import AppointmentPage from "../pageObjects/AppointmentPage";

describe('Appointment Scenarios', () => {
  beforeEach(() => {
    AppointmentPage.visit();
  });

  it('Scenario 1 - Make an Appointment', () => {
    cy.contains('Make Appointment').click();

    // ievada login info un nospiež login
    AppointmentPage.setName.type('John Doe');
    AppointmentPage.setPassword.type('ThisIsNotAPassword');
    cy.get('button#btn-login').click();

    cy.get("select#combo_facility").select("Seoul CURA Healthcare Center");
    cy.get("[name='hospital_readmission']").check();
    cy.get("#radio_program_medicaid").check();

    cy.get("#txt_visit_date").click();
    cy.get(".datepicker-days .day:not(.old)").contains("30").click();
    cy.get("#txt_comment").type("CURA Healthcare Service");
    cy.contains("Book Appointment").click();

    // Validate previously set values
    cy.get("#facility").should("contain.text", "Seoul CURA Healthcare Center");
    cy.get("#hospital_readmission").should("contain.text", "Yes");
    cy.get("#program").should("contain.text", "Medicaid");
    cy.get("#visit_date").should("contain.text", "30/06/2023");
    cy.get("#comment").should("contain.text", "CURA Healthcare Service");
  });

  it("Scenario 2 - Appointment history empty", () => {
    cy.contains("Make Appointment").click();
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get('button#btn-login').click();

    cy.get("#menu-toggle").click();
    cy.get(".sidebar-nav").should("be.visible");

    cy.contains("History").click();
    cy.contains("No appointment").should("be.visible");
  });
});