describe('Landing Page', () => {
  it('should display a logo and list of articles', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('NEWSFEED');
    cy.get('.Home').children().should('have.length', 5);
    cy.get('.Home').children().first()
      .get('h2').contains('United Auto Workers strike enters third day: Live updates - CNN')
      .get('p').contains('The United Auto Workers\' strike against General Motors, Ford and Stellantis has entered its third day. Follow here for the latest.')
      .get('p').contains('Sun Sep 17 2023 09:02')
      .get('p').contains('CNN');
    cy.get('.Home').children().last()
      .get('h2').contains('CU Buffs’ Shedeur Sanders engineers legendary comeback against rival CSU Rams - BuffZone')
      .get('p').contains('Naturally, Shedeur Sanders wore a hat and sunglasses after the game late Saturday night.')
      .get('p').contains('Sun Sep 17 2023 08:03')
      .get('p').contains('buffzone.com');
  })
})