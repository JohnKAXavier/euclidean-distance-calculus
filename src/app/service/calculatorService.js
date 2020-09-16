const geoLocationService = require('./geoLocationService');
const euclideanDistanceService = require('./euclideanDistanceService');

const calculateDistance = async (addresses) => {      
  let output = [];
  let latNLongAdresses = [];  
  try{
    latNLongAdresses = await geoLocationService.getListLatNLong(addresses);
  }catch(error){    
    return {cod: 400, body: error};
  }

  if(!latNLongAdresses) return {cod: 400, body: "No address found"};

  latNLongAdresses.forEach(address=>{
    output.push({
      addressName: address.addressName,
      nearbyAdresses: compareDistances(address, latNLongAdresses.filter(value=>value.addressName!=address.addressName))
    })    
  })
  
  return {cod: 200, body: output};
}

const compareDistances = (initialLocation, compareLocations) => {  

  let nearbyPlaces = [];
  let nearestLocationDistance = Number.MAX_SAFE_INTEGER;

  compareLocations.forEach(location => {      
    let aPoint = {
      x: initialLocation.latitude,
      y: initialLocation.longitude
    };

    let bPoint = {
      x: location.latitude,
      y: location.longitude
    }

    let euclideanDistance = euclideanDistanceService.calculateDistance(aPoint, bPoint);

    if(euclideanDistance < nearestLocationDistance){
      nearestLocationDistance = euclideanDistance;
      nearbyPlaces.unshift({
        addressName: location.addressName,
        latitude: bPoint.x,
        longitude: bPoint.y
      });
    }else{
      nearbyPlaces.push({
        addressName: location.addressName,
        latitude: location.latitude,
        longitude: location.longitude
      });
    }
  })

  return nearbyPlaces;  

}

module.exports = {calculateDistance: calculateDistance}