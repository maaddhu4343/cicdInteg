/// <reference types = "cypress" />


before(function() {

    cy.fixture("example.json").as('test_data')
    
})



it("should be able to read and write files", () => {

    cy.fixture("example.json").then((data) => {

        cy.log(data.name);
        cy.log(data.email)

    })
    
})

it("Read File", () => {

    cy.readFile("./cypress/fixtures/example.json").then((data) => {
      cy.log(data.name);
    })
})
it("WriteFile File Demo", () => {

   //cy.writeFile("./cypress/fixtures/sample.json", {name:"Madhu Babu K", email:"maaddhu4343@gmail.com"})
   cy.writeFile("./sample.txt", "I am learnign Cypress\n")
   cy.writeFile("./sample.txt", "I am learnign Cypress an d javascript", {flag:"a+"})
})
