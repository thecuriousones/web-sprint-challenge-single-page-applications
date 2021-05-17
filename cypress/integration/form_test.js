describe('New Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('can type and see proper info', () => {
        cy.get('#name-input').type('Tamara Leonard').should('have.value', 'Tamara Leonard')
        cy.get('input[type=checkbox]').check()
        cy.get('#pizza-form').submit()

    })

})