# cypress-axe-project
Configuraremos Cypress y Cypress-Axe para comenzar a automatizar algunos de nuestros requisitos de pruebas de accesibilidad.<br>
Si no lo sabe, Cypress viene integrado con una estructura de carpetas predefinida para que pueda comenzar de inmediato.<br>
Sin embargo, necesitamos ejecutar un comando más, así que volvamos a nuestra terminal.
Escribir <b>npx cypress open</b>
NPX es básicamente una notación de acceso directo para ejecutar un comando específico.<br>
Necesitamos importar los comandos que necesitamos en nuestro <b> support/index.js </b> archivo.<br> <b>import 'cypress-axe'</b>;<br>