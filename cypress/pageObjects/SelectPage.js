
class SelectPage {

    static get url() {
        return "/selectable";
    }

    static visit() 
    {
        cy.visit(this.url);
    }

    static get selectGrid() 
    {
        return cy.contains('Grid');
    }

    static selectNumber(items) 
    {
        items.forEach((item) => {
            cy.contains(item).click();
        });
    }

    static validateSelected(items) 
    {
        items.forEach((item) => {
            cy.contains(item).should('have.class', 'list-group-item active list-group-item-action');
        });
    }

    static validateUnselected(items) 
    {
        items.forEach((item) => {
            cy.contains(item).should('not.have.class', 'list-group-item active list-group-item-action');
        });
    }

}

export default SelectPage;