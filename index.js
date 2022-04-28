// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return Math.abs(42 - block)
}
function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
  }
  function distance(start, end){
    return Math.abs(start - end)
  }
  function distanceTravelledInFeet(start, end){
    return distance(start, end) * 264
  }
  
  function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    // if the distance is less than 400 then its free
    if(distance < 400){
      console.log('distance is less than 400')
      return 0;
    }
    else if(distance > 400 && distance < 2000 ){
        console.log('distance is less than 2000')
        
        return (distance - 8 * 0.02) 
      }
        //for distance between 2000 and 2500
      else if(distance > 2000 && distance < 2500){
        console.log('distance is less than 2500')
        
        return 25;
      } 
      //for distance over 2500
      else (distance >= 2500)
        return 'cannot travel that far'
      
        //returns the fare for the customer
  }
    