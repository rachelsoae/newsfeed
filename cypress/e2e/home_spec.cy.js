describe('Articles List & Search', () => {
  beforeEach(() => {
    cy.intercept('https://newsapi.org/v2/top-headlines?country=us', {
      method: 'GET',
      fixture: 'mockData'
    })
    cy.visit('http://localhost:3000')
  })
  
  it('should display a logo and list of articles', () => {
    cy.get('h1').contains('NEWSFEED');
    cy.get('input[type=search]');
    cy.get('h2').contains('United Auto Workers strike enters third day: Live updates - CNN')
      .get('p').contains('The United Auto Workers\' strike against General Motors, Ford and Stellantis has entered its third day. Follow here for the latest.')
      .get('p').contains('Sun Sep 17 2023 09:02')
      .get('p').contains('CNN');
    cy.get('h2').contains('CU Buffs’ Shedeur Sanders engineers legendary comeback against rival CSU Rams - BuffZone')
      .get('p').contains('Naturally, Shedeur Sanders wore a hat and sunglasses after the game late Saturday night.')
      .get('p').contains('Sun Sep 17 2023 08:03')
      .get('p').contains('buffzone.com');
  })

  it('should display a list of articles matching a search term', () => {
    cy.get('input').type('Drew');
    cy.get('h2').contains('Drew Barrymore pauses talk show return after removing video apology to writers and actors on strike - CNN')
    .get('p').contains('Drew Barrymore announced on Sunday that she will pause the premiere of her talk show after receiving backlash over her decision to resume production as more than 11,000 television and film writers remain on strike.')
    .get('p').contains('Sun Sep 17 2023 08:44')
    .get('p').contains('CNN');
  })

  it('should not be case sensitive when searching', () => {
    cy.get('input').type('bArRYmoRe');
    cy.get('h2').contains('Drew Barrymore pauses talk show return after removing video apology to writers and actors on strike - CNN')
    .get('p').contains('Drew Barrymore announced on Sunday that she will pause the premiere of her talk show after receiving backlash over her decision to resume production as more than 11,000 television and film writers remain on strike.')
    .get('p').contains('Sun Sep 17 2023 08:44')
    .get('p').contains('CNN');
  })

  it('should return a message if no articles match the search term', () => {
    cy.get('input').type('nOnSen$e');
    cy.get('p').contains('Sorry, no articles were returned that match your search')
  })
})