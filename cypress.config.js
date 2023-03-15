const { defineConfig } = require("cypress")
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.psicologiaviva.com.br',
    baseURLBuscaExterna: 'https://www.psicologiaviva.com.br/psicologo/',
    "experimentalSessionAndOrigin": true,
    "chromeWebSecurity": false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    videoCompression: 10,
    "hideXHR": true,
    setupNodeEvents(on, config) {
      //allureWriter(on, config);
      return config
      // implement node event listeners here
    },
  },
})
