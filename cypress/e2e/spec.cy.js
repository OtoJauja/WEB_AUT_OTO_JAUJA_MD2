import AppointmentPage from "../pageObjects/AppointmentPage";

describe('Appointment scenāriji', () => {
  beforeEach(() => {
    AppointmentPage.visit();
  });

  it('Scenario 1 - Make an Appointment', () => {
    cy.contains('Make Appointment').click();

    // ievada login info un nospiež login
    AppointmentPage.setName.type('John Doe');
    AppointmentPage.setPassword.type('ThisIsNotAPassword');
    cy.get('button#btn-login').click();

    // aizpilda vajadzīgo info
    AppointmentPage.selectFacility.select("Seoul CURA Healthcare Center");
    AppointmentPage.checkHospital.check();
    AppointmentPage.checkMedicaid.check();

    cy.get("#txt_visit_date").click();
    AppointmentPage.selectDate.contains("30").click();
    AppointmentPage.setComment.type("CURA Healthcare Service");
    AppointmentPage.clickAppointment.click();

    // validē info
    cy.get("#facility").should("contain.text", "Seoul CURA Healthcare Center");
    cy.get("#hospital_readmission").should("contain.text", "Yes");
    cy.get("#program").should("contain.text", "Medicaid");
    cy.get("#visit_date").should("contain.text", "30/06/2023");
    cy.get("#comment").should("contain.text", "CURA Healthcare Service");
  });


  it("Scenario 2 - Appointment history empty", () => {

    cy.contains("Make Appointment").click();
    AppointmentPage.setName.type('John Doe');
    AppointmentPage.setPassword.type('ThisIsNotAPassword');
    cy.get('button#btn-login').click();

    // nospiež un validē sidebar
    AppointmentPage.clickMenu.click();
    cy.get(".sidebar-nav").should("be.visible");
    
    // nospiež History
    AppointmentPage.clickHistory.click();

    // validē ka no appointment ir redzams
    cy.contains("No appointment").should("be.visible");
  });
});