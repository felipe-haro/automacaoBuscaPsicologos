/// <reference types="cypress" />

describe('Suite Módulo Busca de Psicólogos', () => {

  const nomePsicologo = 'Luciene Pereira'

  context('Busca Psicólogos Saindo do Site Psicologia Viva.', () => {

    beforeEach(() => {
      cy.visit('/')
    })

    it('Realizar busca de psicólogos através do menu suspenso do site, verificando se a quantidade de profissionais na busca é de 5 por página.', () => {

      cy.title().should('eq', 'Consulte com um psicólogo online de qualquer lugar - Psicologia Viva')
      cy.contains('Nossos Especialistas').click()

      cy.wait(7000)

      cy.get('.text-h6.text-center')
        .should('have.text', ' Conheça alguns dos profissionais credenciados  Encontre os melhores psicologos online aqui na Psicologia Viva ')
      cy.get('#resultados')
        .should('be.visible')

      cy.get('.flex-column')
        .find('.v-responsive__content')
        .should('have.length', 5)
    })

    it('Realizar busca de psicólogos através do botão agende já sua consulta, verificando se a quantidade de profissionais na busca é de 5 por página.', () => {

      cy.get('#botaoAgendamentoConsulta')
        .click()

      cy.wait(7000)

      cy.get('#resultados')
        .should('be.visible')

      cy.get('.flex-column')
        .find('.v-responsive__content')
        .should('have.length', 5)
    })

    it('Realizar busca de psicólogos através do botão Procurar, no campo Conheça nossos Profissionais Licenciados, verificando se a quantidade de profissionais na busca é de 5 por página.', () => {

      cy.get('.btn-primary-alt')
        .click()

      cy.wait(7000)

      cy.get('#resultados')
        .should('be.visible')

      cy.get('.flex-column')
        .find('.v-responsive__content')
        .should('have.length', 5)
    })

    it('Realizar busca de psicólogos selecionando um tema e verificando o tema, através do botão Procurar, no campo Conheça nossos Profissionais Licenciados, verificando se a quantidade de profissionais na busca é de 5 por página.', () => {

      cy.buscaRandomicaPaginaSite()

      cy.get('.btn-primary-alt')
        .click()

      cy.wait(7000)

      cy.get('#resultados')
        .should('be.visible')

      cy.get('.flex-column')
        .find('.v-responsive__content')
        .should('have.length', 5)
    })
  })

  context('Busca Psicólogos direto da URL da Busca Externa', () => {

    it('Busca de psicólogos por Tema', () => {

      cy.buscaExternaURL()
      cy.buscaPorTemas()

      cy.get('#resultados')
        .should('be.visible')

      cy.get('.flex-column')
        .find('.v-responsive__content')
        .should('have.length', 5)
    })

    it('Busca de psicólogos por Área', () => {

      cy.buscaExternaURL()
      cy.wait(4000)
      cy.buscaPorArea()

      cy.get('#resultados')
        .should('be.visible')

      cy.get('.flex-column')
        .find('.v-responsive__content')
        .should('have.length', 5)
    })

    it('Busca de psicólogos por Área e Sub Área', () => {

      cy.buscaExternaURL()
      cy.buscaPorAreaSubArea()

      cy.get('#resultados')
        .should('be.visible')

      cy.get('.flex-column')
        .find('.v-responsive__content')
        .should('have.length', 5)
    })

    it('Busca de psicólogos por Especialidades', () => {

      cy.buscaExternaURL()
      cy.wait(4000)
      cy.buscaPorEspecialidades()

      cy.get('#resultados')
        .should('be.visible')

      cy.get('.flex-column')
        .find('.v-responsive__content')
        .should('have.length', 5)
    })

    it('Busca por Psicólogo Específico', () => {

      cy.buscaExternaURL()
      cy.wait(4000)
      cy.buscaPorPsicologoEspecifico(nomePsicologo)

      cy.get('#resultados')
        .should('be.visible')

      cy.get('h1:contains( Luciene Pereira Maximiano )')
        .should('have.text', ' Luciene Pereira Maximiano ')

      cy.get('.flex-column')
        .find('.v-responsive__content')
        .should('be.visible')
        .should('have.length', 1)
        .should('have.css', 'background-image')
    })
  })

  /*
  context('Busca Psicólogos - Demais Filtros da Busca', () => {
  
    it('Busca de psicólogos por filtro de plano de saúde', () => {

    })

    it('Busca  de Psicólogos por filtro de localização - Estado', () => {

    })

    it('Busca  de Psicólogos por filtro de localização - Cidade', () => {

    })

    it('Busca de psicólogos por Disponibilidade - Datas', () => {

    })

    it('Busca de psicólogos por Acessibilidade - Libras', () => {

    })

    it('Busca de psicólogos por Acessibilidade - Possui video de apresentação', () => {

    })

    it('Busca de psicólogos - Mais Filtros - Abordagem', () => {

    })

    it('Busca de psicólogos - Mais Filtros - Faixa Etaria', () => {

    })

    it('Busca de psicólogos - Mais Filtros - Genero - Mulher', () => {

    })

    it('Busca de psicólogos - Mais Filtros - Genero - Homem', () => {

    })

    it('Busca de psicólogos - Mais Filtros - Genero - Todos', () => {

    })
  })*/
})
