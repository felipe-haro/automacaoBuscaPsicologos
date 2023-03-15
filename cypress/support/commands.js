/// <reference types="cypress" />

Cypress.Commands.add('buscaRandomicaPaginaSite', () => {
  cy.get('#especialidades').invoke('val').then(currentValue => {
    cy.get('#especialidades option').then(options => {
      const randomOption = Cypress._.sample(options);
      const randomValue = Cypress.$(randomOption).val()
      if (randomValue !== currentValue) {
        cy.get('#especialidades').select(randomValue)
      }
    })
  })
})

Cypress.Commands.add('buscaExternaURL', () => {
  cy.visit(Cypress.config('baseURLBuscaExterna'))
})

Cypress.Commands.add('buscaPorTemas', () => {

  cy.get('div:contains(BUSQUE POR TEMA)')
    .should('be.visible')
  
  cy.wait(7000)

  cy.get('[label="Tema"] > .v-input__control > .v-input__slot > .v-select__slot > :nth-child(4)')
    .click()

  cy.get('div:contains(Adaptação ao Home Office)')
    .click({ multiple: true, force: true })

  cy.get('span:contains( Procurar )')
    .click()
})

Cypress.Commands.add('buscaPorArea', () => {

  cy.get('.v-select__selections').click()
  cy.get('div:contains(BUSQUE POR ÁREA)')
    .should('be.visible')
    .click({ multiple: true, force: true })
  
  cy.wait(7000)

  cy.get('[return-object=""] > .v-input__control > .v-input__slot > .v-select__slot > :nth-child(4)')
    .click()

  cy.get('div:contains(Família)')
    .click({ multiple: true, force: true })

  cy.get('.mt-2 > [style="width: 320px;"]')
    .should('be.visible')

  cy.get('span:contains( Procurar )')
    .click()
})

Cypress.Commands.add('buscaPorAreaSubArea', () => {

  cy.get('.v-select__selections').click()
  cy.get('div:contains(BUSQUE POR ÁREA)')
    .should('be.visible')
    .click({ multiple: true, force: true })
  
  cy.wait(7000)

  cy.get('[return-object=""] > .v-input__control > .v-input__slot > .v-select__slot > :nth-child(4)')
    .click()

  cy.get('div:contains(Família)')
    .click({ multiple: true, force: true })

  cy.get('.mt-2 > [style="width: 320px;"]')
    .should('be.visible')

  cy.get('.mt-2 > .v-text-field--placeholder > .v-input__control > .v-input__slot > .v-select__slot > :nth-child(4)')
    .click({ multiple: true, force: true })

  cy.get('div:contains(Adoção)')
    .should('be.visible')
    .click({ multiple: true, force: true })

  cy.get('span:contains( Procurar )')
    .click()
})

Cypress.Commands.add('buscaPorEspecialidades', () => {

  cy.get('.v-select__selections').click()
  cy.get('div:contains(BUSQUE POR ESPECIALIDADE)')
    .should('be.visible')
    .click({ multiple: true, force: true })
  
  cy.wait(4000)

  cy.get('[label="Especialidade"] > .v-input__control > .v-input__slot > .v-select__slot > :nth-child(4)')
    .click()

  cy.get('div:contains(Psicologia Clínica)')
    .click({ multiple: true, force: true })

  cy.wait(4000)
  cy.get('span:contains( Procurar )')
    .click()
})

Cypress.Commands.add('buscaPorPsicologoEspecifico', (nomePsicologo) => {

  cy.get('.v-select__selections').click()
  cy.get('div:contains(BUSQUE POR PROFISSIONAL)')
    .should('be.visible')
    .click({ multiple: true, force: true })


  cy.get('.v-text-field__slot')
    .type(nomePsicologo)
    .get('span:contains( Procurar )')
    .click()

})