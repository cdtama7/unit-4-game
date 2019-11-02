var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

var counter = 0;
var wins = 0;
var losses = 0;

$("#numbertoguess").text(targetNumber);

function gennewtarget() {
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

function gennewvalues() {
    numberOptions = [(Math.floor(Math.random() * (12)) + 1), (Math.floor(Math.random() * (12)) + 1), (Math.floor(Math.random() * (12)) + 1), (Math.floor(Math.random() * (12)) + 1)];
    for (var i = 0; i < numberOptions.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal2 = $("#crystalid" +[i]);
      
        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal2.attr("data-crystalvalue", numberOptions[i]);   
      };
}

function reset() {
    gennewtarget();
    gennewvalues();
    counter = 0;
    $("#numbertoguess").text(targetNumber);
    $("#userscore").text(counter);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    
}

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [(Math.floor(Math.random() * (12)) + 1), (Math.floor(Math.random() * (12)) + 1), (Math.floor(Math.random() * (12)) + 1), (Math.floor(Math.random() * (12)) + 1)];

var images = ["assets/images/greenchaos.png", "assets/images/purplechaos.png", "assets/images/redchaos.png", "assets/images/whitechaos.png"];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", images[i]);

  imageCrystal.attr("id","crystalid" +[i]);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  $("#userscore").text(counter);

  if (counter === targetNumber) {
    $("#winlosetext").text("You win!");
    wins++;
    reset();
  }

  else if (counter >= targetNumber) {
    $("#winlosetext").text("You lose!");
    losses++;
    reset();
  }

  

});