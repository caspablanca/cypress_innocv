/// <reference types="cypress" />

describe ('First test suite', () => {

    it('first test', () => {
      cy.visit('/')
      cy.contains('Quiénes somos').click()  
    })

    it('second test', () => {
        cy.visit('/')
        cy.contains('Qué hacemos').click()  
      })
})