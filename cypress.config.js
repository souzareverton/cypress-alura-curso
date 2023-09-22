const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      reporter: 'mochawesome'
      reporterOptions: {
        reportDir: "cypress/report/mochawesome-report"
        overwrite: true
        hmI: true
        json: false
        timestamp: "mmddyyyy_HHMMSS"  
    }
  },
  baseUrl: "https://3076-cypress-alurapic-front.vercel.app/#/home"
}
});
