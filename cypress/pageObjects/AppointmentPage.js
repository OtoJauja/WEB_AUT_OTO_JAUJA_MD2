
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

    static get setPassword()
    {
        return cy.get('#txt-password');
    }
}

export default AppointmentPage;