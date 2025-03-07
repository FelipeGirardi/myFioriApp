Documentation:


Architecture:

/myFioriApp\
&nbsp; index.html\
&nbsp; /webapp\
&nbsp; &nbsp; Component.js\
&nbsp; &nbsp; manifest.json\
&nbsp; &nbsp; /controller\
&nbsp; &nbsp; &nbsp; List.controller.js\
&nbsp; &nbsp; &nbsp; Detail.controller.js\
&nbsp; &nbsp; &nbsp; Create.controller.js\
&nbsp; &nbsp; /view\
&nbsp; &nbsp; &nbsp; List.view.xml\
&nbsp; &nbsp; &nbsp; Detail.view.xml\
&nbsp; &nbsp; &nbsp; Create.view.xml\
&nbsp; &nbsp; /model\
&nbsp; &nbsp; &nbsp; models.js\
&nbsp; &nbsp; &nbsp; data.json

Model for storage orders:
  - id
  - description
  - quantity
  - status

--------------------------------

Used technologies: JavaScript, HTML, XML, SAP Fiori Tools - Application Modeler extension for VS Code

--------------------------------

To execute: in the terminal write "npm start" in myFioriApp folder and execute
