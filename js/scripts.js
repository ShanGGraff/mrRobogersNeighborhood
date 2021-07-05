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
    if (initialArray[i].toString().includes("3")) {
      beMyNeighborArray.push("Won't you be my neighbor?")
    } else if (initialArray[i].toString().includes("2")) {
      beMyNeighborArray.push("Boop!");
    } else if (initialArray[i].toString().includes("1")) {
      beMyNeighborArray.push("Beep!");
    } else {
      beMyNeighborArray.push(initialArray[i]);
    }
  }
  return beMyNeighborArray;
}

//UserInterface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    $('#beepBoopOutput').hide();

    const numberRange = createNumberArray($('#mrRoboger').val());
    console.log(numberRange);
    
    // const stringSwap = beepBoop(numberRange);
    const stringSwap = beepBoop(numberRange);
    console.log(beepBoop(stringSwap));
    
    $('#beepBoopOutput').append("<p>" + stringSwap + "</p>").show();
    event.preventDefault();
  });
}); 