const validator = require('../validators/calculatorValidate')
const service = require('../service/calculatorService');

exports.calculate = async (req, res) => {      

  let errors = validator.ValidateCalulatorData(req.body.addresses);

  if(errors.length > 0){
    return res.status(400).send({ errors: errors });
  }

  let result;
  try{
    result = await service.calculateDistance(req.body.addresses);
  } catch (error) {    
    res.status(error.cod).json(error.body); 
  }
  
  res.status(result.cod).json(result.body);   
}