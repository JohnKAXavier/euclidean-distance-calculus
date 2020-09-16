const axios = require('axios').default;

const request = (path) => {        
 return axios.get(path)
  .then(response => {        
    return {
      latitude: response.data.features[0].geometry.coordinates[1],
      longitude: response.data.features[0].geometry.coordinates[0],
      addressName: response.data.features[0].place_name
    }
  })
  .catch(function (error) {    
    console.log(error);
    return error;
  })
}

module.exports = {request: request};