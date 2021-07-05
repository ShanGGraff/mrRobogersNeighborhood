// Utility Logic
function createNumberArray(number) {
  const numberInput = number;
  let initialArray = [];
  for (let i = 0; i <= numberInput; i++) {
    initialArray.push(i);
  }
  return initialArray;
}
    

// Business Logic
function beepBoop(initialArray) {
  let beMyNeighborArray = [];
  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i].toString().includes("1")) {
      beMyNeighborArray.push("Beep!");
    }  else {
      beMyNeighborArray.push("Boop!");
    }
  return beMyNeighborArray;
  }
}

//UserInterface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    $('#mrRoboger').hide();

    const numberRange = createNumberArray($('#mrRoboger').val());
    console.log(numberRange);
    console.log(beepBoop(numberRange));
  

    $('#mrRoboger').show(); 
    event.preventDefault();
  });
});