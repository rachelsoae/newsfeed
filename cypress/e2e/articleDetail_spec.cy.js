describe('Article Detail page', () => {
  it('should display unique article details', () => {
    cy.intercept('https://newsapi.org/v2/top-headlines?country=us', {
      method: 'GET',
      fixture: 'mockData'
    })
    cy.visit('http://localhost:3000');
    cy.get('h2').contains('United Auto Workers strike enters third day: Live updates - CNN').click();
    cy.get('p').contains('CNN')
      .get('h2').contains('United Auto Workers strike enters third day: Live updates - CNN')
      .get('p').contains('By Robert Ilich, CNN')
      .get('p').contains('Sun Sep 17 2023 09:02')
      .get('p').contains('The United Auto Workers strike isnt happening in a vacuum. Its part of a growing movement of US workers walking off the job. From Hollywood writers to nurses, factory workers, and Starbucks baristas…')
      // clicking external article results in multiple chained network requests on the third-party page; opting not to stub/test
      .get('a').contains('[Link to Original Article]')
      .get('a').contains('< Back').click()
      .url().should('eq', 'http://localhost:3000/');
    cy.get('.Home').children().last().click();
    cy.get('p').contains('buffzone.com')
      .get('h2').contains('CU Buffs’ Shedeur Sanders engineers legendary comeback against rival CSU Rams - BuffZone')
      .get('p').contains('Brian Howell')
      .get('p').contains('Sun Sep 17 2023 08:03')
      .get('p').contains('Naturally, Shedeur Sanders wore a hat and sunglasses after the game late Saturday night. Perhaps that was the most predictable aspect of the weekend for the Colorado Buffaloes, in light of the comme…')
      // clicking external article results in multiple chained network requests on the third-party page; opting not to stub/test
      .get('a').contains('[Link to Original Article]')
  })
})