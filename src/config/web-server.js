const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('../app/routes/routes');
const swaggerUi = require('swagger-ui-express');
const swagerJSDoc = require('swagger-jsdoc');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Euclidean Distance Calculation",
      description: "This api calculates the Euclidean distance.",
      servers: ["http://localhost:3000/"]
    }
  },
  apis:["./src/app/routes/routes.js"]
};

const swaggerDocs = swagerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes(app);
module.exports = app;