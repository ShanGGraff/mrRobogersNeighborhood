//Utility Logic
function createNumberArray(number) {
  const numberInput = number;
  let initialArray = [];
  for (let i = 0; i <= numberInput; i++) {
    initialArray.push(i);
  }
  return initialArray;
}

//Business Logic

  
//UserInterface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    $('#mrRoboger').hide();

    
  
    const numberArray = createNumberArray($('#mrRoboger').val());
    console.log(numberArray);
  

    $('#mrRoboger').show(); 
    event.preventDefault();
  });
});