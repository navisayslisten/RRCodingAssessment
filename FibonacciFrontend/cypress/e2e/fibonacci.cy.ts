const invalidInputData = [0, -1, -10]
const inputData = [1, 10, 55, 1001]

describe('Fibonacci running', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Fibonacci Sequence Calculator')
  })
})

describe('Fibonacci valid input', () => {
  inputData.forEach((n) =>{
    it('Updates the table with all results', () => {
      cy.visit('/')
      cy.get('#input').clear().type(`${n}`).type('{enter}')
      cy.get('tbody').children().its('length').should('eq', n+1)
    })
  })
})

describe('Fibonacci input without refreshing', () => {

    it('Updates the table with new results', () => {
      cy.visit('/')
      inputData.forEach((n) =>{
        console.log(n)
        cy.get('#input').clear().type(`${n}`).type('{enter}')
        cy.get('tbody').children().its('length').should('eq', n+1)
      })
    })
})

describe('Fibonacci invalid input', () => {
  invalidInputData.forEach((n) =>{
    it(`Shows error text. ${n}`, () => {
      cy.visit('/')
      cy.get('#input').clear().type(`${n}`).type('{enter}')
      cy.get('mat-error').contains('The value is lower than the minimum of 1')
    })
  })
})

describe('Fibonacci no input', () => {
  it('Shows required error text', () => {
    cy.visit('/')
    cy.get('#input').clear().type('{enter}')
    cy.get('mat-error').contains('Input is required')
  })
})
