/// <reference types="cypress"/>
describe('Todo application', () => {
    beforeEach('', () => {
        cy.visit('http://todomvc.com/examples/react');
        cy.injectAxe();
    });

    it('should log any accessibility failures', () => {
        cy.checkA11y();
    });

    it('should exclude specific elements on the page', () => {
        cy.checkA11y({ exclude: ['.learn'] });
    });

    it('should only test specific elements on the page', () => {
        cy.checkA11y('.learn');
    });
    /* 
    Para el primer parámetro, voy a aprobar nullporque no vamos a excluir ningún elemento específico en la página.
    Cypress-Axe tiene una opción para configurar includedImpacts, que acepta una matriz de cadenas que se asigna a un nivel de gravedad.
    Para esta prueba, solo incluiremos el seriousy el criticalimpacto.
    */
    it('should only include rules with serious and critical impacts', () => {
        cy.checkA11y(null, {
            includedImpacts: ['critical', 'serious']
        });
    });
    /* 
    Excluir las reglas específicas independientemente de su impacto.
     llamada a cy.checkA11y, y luego también vamos a pasar nullporque no queremos excluir elementos específicos.
     Esta vez en el parámetro de opciones, vamos a pasar la opción para establecer las reglas.
     Aquí, solo necesita pasar el nombre de la regla que desea deshabilitar y luego establecer la propiedad habilitada false.
    */
    it('should exclude specific accessibility rules', () => {
        cy.checkA11y(null, {
            rules: {
                'color-contrast': { enabled: false }
            }
        });
    });

});