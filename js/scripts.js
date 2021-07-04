//Business Logic
function beepBoop(number) {
  const numberInput = number.parseInt.val();
  let initialArray = [];
  for (let i = 0; i <= numberInput; i++) {
    if (numberInput = 1) {
      initialArray.push("Beep!")
    }
    else {
      initialArray.push(i);
    }
    
  }
  return initialArray;
}

// //Business Logic
// function beepBoop(initialArray) {
// });


  
//UserInterface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    $('#mrRoboger').hide();

    
  
    const numberArray = beepBoop($('#mrRoboger').val());
    console.log(numberArray);
  

    $('#mrRoboger').show(); 
    event.preventDefault();
  });
});