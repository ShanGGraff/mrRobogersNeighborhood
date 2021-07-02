//Utility Logic

//Business Logic
  
//UserInterface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    $('#mrRoboger').hide();

    const mrRoboger= $("#mrRoboger").val();
    console.log(mrRoboger);

    $('#mrRoboger').show(); 
    event.preventDefault();
  });
});