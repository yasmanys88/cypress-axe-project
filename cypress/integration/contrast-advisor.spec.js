/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>

/*
set APPLITOOLS_API_KEY = oWJV3UCa0AzQsr40hT100ig3LIYgJmOXiyi7iil74VoWg110
var apiKey = process.env.APPLITOOLS_API_KEY;
eyes.setApiKey(apiKey);

npm i -D @applitools/eyes-cypress@3.13.4
npx eyes-setup 
nuevo tipo de referencia aquí para el @applitools/eyes-cypress paquete
Que habilita IntelliSense para los nuevos comandos que necesitamos del complemento Eyes-Cypress.
*/


describe('Contrast Advisor Demo', () => {
    it('Debería mostrar problemas de contraste en el panel de Applitools', () => {
        cy.eyesOpen({
            appName: 'Contrast Advisor',
            batchName: 'Contrast Advisor'
        });
        cy.visit('https://heavyweight.nl/');
        cy.eyesCheckWindow();
        cy.eyesClose();
    });
});