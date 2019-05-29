function MRTurnEvaluation() {
    switch (rover.order) {
      case "turnLeft":
        if (rover.direction == "N") {
          rover.direction = "W";
        } else if (rover.direction == "E") {
          rover.direction = "N";
        } else if (rover.direction == "S") {
          rover.direction = "E";
        } else if (rover.direction == "W") {
          rover.direction = "S";
        }
        console.log(rover.direction);
        break;
  
      case "turnRight":
        if (rover.direction == "N") {
          rover.direction = "E";
        } else if (rover.direction == "E") {
          rover.direction = "S";
        } else if (rover.direction == "S") {
          rover.direction = "W";
        } else if (rover.direction == "W") {
          rover.direction = "N";
        }
        console.log(rover.direction);
        break;
    }
  }
  function MRMovementEvaluation() {
    switch (rover.direction) {
      case "N":
        if (rover.xAxis <= 9) {
          rover.xAxis -= 1;
        }
        break;
      case "E":
        rover.yAxis += 1;
        break;
      case "S":
        rover.xAxis += 1;
        break;
      case "W":
        rover.yAxis -= 1;
        break;
    }
  
    if (
      rover.xAxis >= 0 &&
      rover.xAxis <= 9 &&
      rover.yAxis >= 0 &&
      rover.yAxis <= 9
    ) {
     
     clearPositionMatrix();
      console.log("Mars Rover's new position:");
      rover.position[rover.xAxis][rover.yAxis] = "MR";
      console.table(rover.position);
      // Rover's path record and print
      rover.travelLog[travelLogCount] = rover.xAxis + ","+ rover.yAxis;
      console.log("Mars Rover's path:");
      console.table(rover.travelLog);
      travelLogCount += 1;
    } else {
      switch (rover.direction) {
        case "N":
          rover.xAxis += 1;
          break;
        case "E":
          rover.yAxis -= 1;
          break;
        case "S":
          rover.xAxis -= 1;
          break;
        case "W":
          rover.yAxis += 1;
          break;
      }
      console.log("Mars Rover stuck :_(");
      console.log("MR stays at:");
      console.table(rover.position);
      console.log("Current direction: " + rover.direction);
    }
  }

  function clearPositionMatrix() {
    for (var i = 0; i < 10; i++) {
      rover.position[i] = [];
      for (var j = 0; j < 10; j++) {
        rover.position[i][j] = "__";
      }
    }
  }