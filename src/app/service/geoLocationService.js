const httpService = require('./httpService');
const mapBoxHelper = require('../helper/mapBoxHelper');

const getLatNLong = async (address) => {
  let latitudeNLongitude;
  try {
    latitudeNLongitude = await httpService.request(mapBoxHelper.prepareUrlGeoLocation(address));
  } catch (error) {
    console.log(error);
    return error;
  }
  return latitudeNLongitude;  
}

const getListLatNLong = (addresses) => {
  return Promise.all(
    addresses.map(address=>{
      return getLatNLong(address.addressName);
    })
  ).then(values => {   
    return values;
  }).catch(error=>{
    console.log(error);
    return "No address found";
  });
}

module.exports = {
  getLatNLong: getLatNLong,
  getListLatNLong: getListLatNLong
};