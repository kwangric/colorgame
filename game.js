var gameButtons = [];
var correctColor = "";
var userChosenColor = "";
var difficulty = "hard";

function randomRGB() {
  var num1 = Math.floor(Math.random() * 256);
  var num2 = Math.floor(Math.random() * 256);
  var num3 = Math.floor(Math.random() * 256);
  return (num1 + ", " + num2 + ", " + num2);
}

function randomButtonEasy() {
  var easyNum = Math.floor((Math.random() * 3));
  return easyNum;
}

function randomButtonHard() {
  var hardNum = Math.floor((Math.random() * 6));
  return hardNum;
}

function reset() {
  gameButtons = [];
  correctColor = "";
  userChosenColor = "";
  $(".header").css("background-color", "#84a98c");
  for (var i = 1; i < 7; i++) {
    $("#btn" + i).css("background-color", "#2f3e46")
}
}


function setButtons() {
  reset();
  if (difficulty === "easy") {
    for (var i = 1; i < 4; i++) {
      var newColor = randomRGB();
      $("#btn" + i).css("background-color", "rgb(" + newColor + ")")
      gameButtons.push(newColor);
    }
    correctColor = gameButtons[randomButtonEasy()];
    $("h1").text("RGB(" + correctColor + ")");
  }
  if (difficulty === "hard") {
    for (var i = 1; i < 7; i++) {
      var newColor = randomRGB();
      $("#btn" + i).css("background-color", "rgb(" + newColor + ")")
      gameButtons.push(newColor);
    }
    correctColor = gameButtons[randomButtonHard()];
    $("h1").text("RGB(" + correctColor + ")");
  }
}

function winColors() {
  var buttons = $(".btn");
  if (difficulty === "easy") {
    for (var i = 1; i < 4; i++) {
      $("#btn" + i).css("background-color", "rgb(" + correctColor + ")");
    }}
  if (difficulty === "hard") {
      for (var i = 1; i < 7; i++) {
        $("#btn" + i).css("background-color", "rgb(" + correctColor + ")");
      }}

  // $.each(buttons, function(bn) {
  //   $("#btn" + (bn + 1)).css("background-color", "rgb(" + correctColor + ")")
  // })
  $(".header").css("background-color", "rgb(" + correctColor + ")");
  alert("A winner is you.");
}

$(".btn").click(function() {
  var userChosenButton = this.id;
  userChosenColor = $("#" + userChosenButton).css("background-color");
  if (userChosenColor === ("rgb(" + correctColor + ")")) {

    winColors();

  }
  else {
    $("#" + userChosenButton).css("background-color", "#2f3e46");
    // buttonFadeOut(userChosenButton);
  }
})

$(".easy").click(function() {
  difficulty = "easy";
  setButtons();
})

$(".hard").click(function() {
  difficulty = "hard";
  setButtons();
})

$(".restart").click(function() {
  setButtons();
})

setButtons();
