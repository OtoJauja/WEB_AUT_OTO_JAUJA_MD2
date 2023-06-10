
class AppointmentPage {

    static get url() {
        return "/";
    }

    static visit() 
    {
        cy.visit(this.url);
    }

    static get setName()
    {
        return cy.get('#txt-username');
    }

    static get setPassword()
    {
        return cy.get('#txt-password');
    }

    static get selectFacility()
    {
        return cy.get("select#combo_facility");
    }

    static get checkHospital()
    {
        return cy.get("[name='hospital_readmission']");
    }

    static get checkMedicaid()
    {
        return cy.get("#radio_program_medicaid");
    }

    static get selectDate()
    {
        return cy.get(".datepicker-days .day:not(.old)");
    }

    static get setComment()
    {
        return cy.get("#txt_comment");
    }

    static get setComment()
    {
        return cy.get("#txt_comment");
    }

    static get clickAppointment()
    {
        return cy.contains("Book Appointment");
    }

    static get clickMenu()
    {
        return cy.get("#menu-toggle");
    }

    static get clickHistory()
    {
        return cy.contains("History");
    }

}

export default AppointmentPage;