describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('can visit the main page and navigate to the about page', () => {
    cy.visit('http://localhost:8000/');
    cy.get('span')
      .contains('About')
      .click();
  });
});
