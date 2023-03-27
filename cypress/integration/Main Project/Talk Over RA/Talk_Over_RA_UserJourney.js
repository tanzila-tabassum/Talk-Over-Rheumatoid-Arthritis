const pause_2 = Cypress.env('pause_2')
const pause = Cypress.env('pause')
const pause_1 = Cypress.env('pause_1')
describe('Talk Over RA User Journey', function() {
    it('Visits Talk Over RA', function() {
      cy.visit('https://www.talkoverra.com') 
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    cy.viewport(1280, 800)
    cy.wait(pause_2)
    cy.get('#truste-consent-button').click()
    cy.wait(pause_2)
    cy.get('[href="https://www.talkoverra.com/ca/en.html"]').click()
    cy.wait(pause_2)
    cy.get('#LanguageSelect').click()
    cy.wait(pause)
    cy.get('.dropdown-item').click()
    cy.wait(pause)
    cy.get('#LanguageSelect').click()
    cy.wait(pause)
    cy.get('.dropdown-item').click()
    cy.wait(pause)
    cy.get('ul > :nth-child(2) > a').click()
    cy.wait(pause_2)
    cy.scrollTo('center')
    cy.wait(pause)
    cy.get('#accordion_1618240041196 > :nth-child(2) > .accordion-item-header > .container > .row > .col-12 > .accordion-toggler > .bar').click()
    cy.wait(pause_2)
    cy.get('#accordion_1618240041196 > :nth-child(2) > .accordion-item-header > .container > .row > .col-12 > .accordion-toggler > .bar').click()
    cy.wait(pause_2)
    cy.get('ul > :nth-child(3) > a').click()
    cy.wait(pause_2)
    cy.scrollTo('bottom')
    cy.wait(pause_2)
    cy.scrollTo('top')
    cy.wait(pause_2)
    cy.get(':nth-child(4) > a').click()
    cy.wait(pause_2)
    cy.get('.vjs-poster').click('center', { force: true })
    cy.wait(pause_1)
    cy.get('.vjs-poster').click('center', { force: true })
    cy.wait(pause_2)
    cy.scrollTo('bottom')
    cy.wait(pause_2)
    cy.scrollTo('top')
    cy.wait(pause_2)
    cy.get(':nth-child(5) > a').click()
    cy.wait(pause_2)
    cy.get('.col-md-4 > :nth-child(2) > .btn').click()
    cy.wait(pause_2)
    cy.get('#success > .modal-dialog > .modal-content > .close').click()
    cy.wait(pause_2)







    



    })
})
