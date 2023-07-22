describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

it('should open delivery page after continue button click', function() {
    cy.get('button').contains('Конструктор').click();
    cy.contains('Соберите бургер');
  });
