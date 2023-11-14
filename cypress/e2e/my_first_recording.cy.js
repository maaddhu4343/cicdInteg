describe("my_first_recording", () => {
  it("tests my_first_recording", () => {
    cy.viewport(1528, 413);
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("form > div:nth-of-type(1) input").type("Admin");
    cy.get("form > div:nth-of-type(2) input").type("admin123");
    cy.get("button").click();
  
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Cy Studio Login Test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-userdropdown-tab').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    /* ==== End Cypress Studio ==== */
  });
});
