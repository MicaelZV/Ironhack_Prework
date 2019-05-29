var direction = "N";
var inputString = "";
var travelLogCount = 0;
var travelLog = [0];
var position = [0];

var xAxis;
var yAxis;
var rover = {
  direction: "N",
  order: "",
  xAxis: 0,
  yAxis: 0,
  position: [0],
  travelLog: [0]
};


for (var i = 0; i < 10; i++) {
  rover.position[i] = [];
  travelLog[i] = [];
  for (var j = 0; j < 10; j++) {
    rover.position[i][j] = "__";
    travelLog[i][j] = i + "," + j;
  }
}
rover.position[rover.xAxis][rover.yAxis] = "MR";
// ======================

function turnLeft() {
  // console.log("turnLeft was called!");
  rover.order = "turnLeft";
  MRTurnEvaluation();
}

function turnRight() {
  // console.log("turnRight was called!");
  rover.order = "turnRight";
  MRTurnEvaluation();
}

function moveForward() {
  // console.log("moveForward was called");
  MRMovementEvaluation();
}

function commandsInput(inputString) {
  for (i = 0; i < inputString.length; i++) {
    inputStringChar = inputString[i];
    switch (inputStringChar) {
      case "r":
        turnRight();
        break;
      case "l":
        turnLeft();
        break;
      case "f":
        moveForward();
        break;
      default:
        console.log("Character invalid: " + inputStringChar);
    }
  }
}
// Intro information
messagesAppIntro();