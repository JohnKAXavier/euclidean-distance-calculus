const calculateDistance = (aPoint, bPoint) => {
  let distance = Math.sqrt(Math.pow((aPoint.x - bPoint.x), 2) + Math.pow((aPoint.y - bPoint.y), 2));
  return distance;
}

module.exports = {calculateDistance: calculateDistance}