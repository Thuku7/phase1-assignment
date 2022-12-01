// speed limit 
let speedLimit = 70;

//function
function speedLimitToken(userInput) {
  // get the value of excess speed
  let diffInSpeed = userInput - speedLimit;
  let result;

  //check the demrit point condition when above speed limit
  if(userInput > speedLimit && userInput % 5 === 0 && diffInSpeed/5 >= 12 ) {
    result = "Revoked";
  } else if( userInput > speedLimit && diffInSpeed % 5 === 0) {              // returns the merit points
    result = `${diffInSpeed/5} merit points`;
  } else {
    result = "Ok";
  }

  return result

}

