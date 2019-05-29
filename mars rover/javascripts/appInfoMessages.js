function messagesAppIntro(){
console.log("Welcome to Mars Rover Kata!");
console.log("===========================");
console.log("Commands available:");
console.log(
  "turnLeft(); / turnRight(); / moveForward(); / commandsInput(initial letters of previous commands);"
);
console.log("Current direction: " + direction);
console.log("Current position: " + rover.xAxis + "," + rover.yAxis);
console.log("===========================");
}