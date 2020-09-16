const calculatorController = require('../controller/calculatorController');

module.exports = (app) => {
  /**
     * @swagger
     * /calculate:
     *   post:
     *    tags:
     *      - Main
     *    summary: Get nearby places.
     *    consumes: 
     *      - application/json
     *    produces:
     *      - application/json
     *    parameters:
     *      - in: body
     *        name: body
     *        required: true            
     *        schema:
     *          type: array
     *          items:
     *            type: object
     *            properties:
     *              adressName:
     *                type: string     
     *    responses:
     *      '200':
     *        description: Success
     *      '400':
     *        description: Error
     */
  app.post('/calculate', calculatorController.calculate); 
}