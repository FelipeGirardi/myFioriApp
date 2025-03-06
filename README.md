Documentation:


Architecture:

/myFioriApp
  index.html
  /webapp
    Component.js
    manifest.json
    /controller
      List.controller.js
      Detail.controller.js
      Create.controller.js
    /view
      List.view.xml
      Detail.view.xml
      Create.view.xml
    /model
      models.js

Model for storage orders:
  - id
  - description
  - quantity
  - status

--------------------------------

Used technologies: JavaScript, SAP Fiori Tools - Application Modeler extension for VS Code

--------------------------------

To execute: npm start in myFioriApp folder
