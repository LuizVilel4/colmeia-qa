const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://teste-colmeia-qa.colmeia-corp.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: false,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {},
  },
})
