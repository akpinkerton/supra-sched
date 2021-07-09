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
      cy.get('.action-start').type('2021-08-06')//invoke('val').then((text) => {
       // expect('2021-07-06').to.equal(text)}); //.type(08012021);
    })
  it('Clicks End date in Calendar', () => {
    cy.get('.action-end').type('2021-08-06')
  })

  it('Typing in a location', () => {
    cy.get('.action-location').type('los angeles');
  })

   it('Closes Add Event App', () =>{
      cy.contains('Close').click()
  })

  it('Delete button functionality', () => {
    cy.contains('Delete Event').click()
  })

/*      it('Hits the checkboxes on the home page', () => {
    cy.contains('Check Email').click()
  })  */

//--LOGIN CHECK
  it('Clicks on Login page,types name, submit', () =>{
  cy.contains('Login').click().get('.form-control').type('Briana').get('input[type ="button"]').click()
  //contains('Welcome Briana!')
  })



})//end describe
