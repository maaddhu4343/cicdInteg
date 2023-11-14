
it('Assertions Demo', () => {   
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        //.should('have.class', 'query-btn btn btn-primary')
        //.should('be.visible')
        //.should('be.disabled')
        //.should('be.enabled')
        .and('contain', 'Button')
        .and('have.class', 'query-btn btn btn-primary')
        .and('be.visible')
        .and('be.enabled')
        
    expect(false).to.be.false
    
    assert.equal(1, 1, 'CUSTOM: Not equal')
    assert.equal(1, '1', 'CUSTOM: Not equal')
    assert.strictEqual(1, '1', 'CUSTOM Strict euqal: Not equal')
})