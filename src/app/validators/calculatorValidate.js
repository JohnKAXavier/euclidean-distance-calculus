module.exports.ValidateCalulatorData = function (data){

  let errors = [];

  if(!data || !data.length) return ["Invalid body"];

  data.forEach(element => {
    if(!element.addressName) errors.push('Address must be entered');
  });  
     
  return errors;
}