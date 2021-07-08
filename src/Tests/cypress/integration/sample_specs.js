Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('My First Test', () => {
    it('Visits Home Page', () => {
      cy.visit('http://localhost:3000/Home')
     // cy.contains('Delete Event').click()
      cy.contains('Add Event').click() //
    })

    it('Typing in an event', () => {
      cy.get('.action-event').type('beach');
    })// worked with .type but  partent visibility error

    it('Select Date in Calendar', () => {
        cy.get('.action-start')//.type(08012021);
      })


     it('Closes Add Event App', () =>{
        cy.contains('Close').click()
    })

    it('Delete button functionality', () => {
      cy.contains('Delete Event').click()
    })

//start here --LOGIN CHECK
    it('Clicks on Login page,types name, submit', () =>{
    cy.contains('Login').click().get('.form-control').type('Briana').get('input[type ="button"]').click()
    //contains('Welcome Briana!')
    })



  })//end describe


  //btn-danger