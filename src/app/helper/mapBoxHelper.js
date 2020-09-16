const prepareUrlGeoLocation = (addressName) =>{
  return `${process.env.MAPBOX_GEO_LOCATION_BASE_URL}${addressName.replace(/\s+/g, '+')}.json?access_token=${process.env.MAPBOX_API_KEY}`;
}

module.exports = {prepareUrlGeoLocation: prepareUrlGeoLocation};