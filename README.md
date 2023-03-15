# Automação de Testes - Cypress
### Automação de uma aplicação de buscas de psicólogos da plataforma Psicologia Viva, utilizando o Cypress com JavaScript. 

## Motivação

O objetivo deste repositório é apresentar a uma automação de uma pagina de busca com Cypress, com diferentes contextos sobre a plataforma, utilizando conceitos de javascript para buscas aleatórias e custom commands para criação dos cenários de teste. 

### Por quê?

Para que seja tanto uma fonte de consulta rápida quanto de estudos na área de qualidade de software.

# Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) (estou usando a versão `2.39.0` )
- [Node.js](https://nodejs.org/en/) (estou usando a versão `v18.14.0`)
- npm (estou usando a versão `9.3.1`)
- [Visual Studio Code](https://code.visualstudio.com/) (estou usando a versão `1.76.1`) ou alguma outra IDE de sua preferência

> **Obs.:** Recomendo utilizar as mesmas versões, ou versões mais recentes dos sistemas listados acima.
>
> **Obs. 2:** Ao instalar o Node.js o npm é instalado junto. 🎉
>
> **Obs. 3:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` no seu terminal de linha de comando.
>
> **Obs. 4:** Deixei links para os instaladores na lista de requisitos acima, caso não os tenha instalados ainda.

# Fork e clone o projeto 🐑

1. Abra o navegador
2. Acesse a URL (AJUSTAR URL)
3. Faça um [fork](ajustarURL) do projeto

> 👨‍🏫 É de extrema importância que você trabalhe no seu fork, para que possa rodar os testes em um _pipeline_ de integração contínua.

4. No seu fork do projeto, clique no botão **Code**, escolha uma opção de clone (HTTPS ou SSH) e copie o link de clone do projeto

> 👨‍🏫 Eu dou preferência ao clone via SSH, pois considero mais prático.
>
> Para detalhes sobre como criar e configurar uma chave SSH no GitHub, leia a [documentação oficial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh).

5. Em seu terminal de linha de comando (em uma pasta onde você armazene seus projetos de software), execute o comando `git clone [cole-o-link-copiado-aqui]`.

> 👨‍🏫 Para garantir que está clonando o seu fork, verifique a existência do seu usuário no GitHub na URL de clone do projeto. Algo como o seguinte `git@github.com:[seu-usuário-aqui]/ajustarrepositório`

6. Após o clone do projeto, acesse o diretório recém clonado (ex.: `cd ajustarrepositório`).

## Instalação e inicialização do [Cypress](https://cypress.io) 🌲

1. Na raiz do projeto, execute o comando `npm install cypress@12.2.0 --save-dev` (ou `npm i cypress@12.2.0 -D` para a versão curta)
2. Logo após, execute o comando `npx cypress open` para abrir o Cypress pela primeira vez.

> **Obs. 2:** Quando inicializado pela primeira vez, e após você criar os exemplos de testes que são sugeridos, o Cypress automaticamente cria o arquivo `cypress.config.js` e o diretório `cypress/`, com os sub-diretórios `fixtures/`, `e2e/` e `support/`, com seus respetivos arquivos.

## Configurações extra

1. Atualize o arquivo `cypress.config.js` conforme abaixo.

```js
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.psicologiaviva.com.br',
    baseURLBuscaExterna: 'https://www.psicologiaviva.com.br/psicologo/',
    "experimentalSessionAndOrigin": true,
    "chromeWebSecurity": false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    "hideXHR": true,
    setupNodeEvents(on, config) {
      //allureWriter(on, config);
      return config
      // implement node event listeners here
    },
  },
})
```
