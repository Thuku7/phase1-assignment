


//function




function getGrade(marks){
  // get user input
  let userMarks = parseInt(marks);
  //initialize an empty variable to hold the resultgetGrade()
  let result;

  // condition step1 check marks isnt more than 100

  if(userMarks > 100) {
    result = alert("Enter Valid Grade!");
  } else if(userMarks >= 79) {                // Check if marks if more than 79
    result = 'A';
  } else if(userMarks >= 60) {                //checks if input is more or equal to 60
    result = "B";
  } else if(userMarks >= 59) {                // checks if input is more or equal to 59
    result = "c";
  } else if(userMarks >= 40) {                // checks if inpit is more or equal to 49
    result = "D";
  } else {                                    // checks for user input less than 40
    result = "E";
  }

  return result;

  
 

}




console.log(getGrade(78))




