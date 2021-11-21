const {
  directions,
  messages
} = require('./constants');

// setup interface to handle user input from stdin
let connection;
let intervalID;

const handleUserInput =  (key) => {
  clearInterval(intervalID);
  intervalID = null;
  
  if (key === '\u0003') {
    process.exit();
  }  else if (messages[key]) {
    conn.write(messages[key]);
  } else if (directions[key]) {
    if (!intervalID) {
      intervalID = setInterval(() => conn.write(directions[key]), 50);
    }
  }

  // else if (key === MOVE_UP_KEY) {
  //   clearInterval(intervalID);
  //   intervalID = setInterval(() => conn.write("Move: up"), 500);
  // } else if (key === MOVE_LEFT_KEY) {
  //   clearInterval(intervalID);
  //   intervalID = setInterval(() => conn.write("Move: left"), 500);
  // } else if (key === MOVE_DOWN_KEY) {
  //   clearInterval(intervalID);
  //   intervalID = setInterval(() => conn.write("Move: down"), 500);
  // } else if (key === MOVE_RIGHT_KEY) {
  //   clearInterval(intervalID);
  //   intervalID = setInterval(() => conn.write("Move: right"), 500);
  // } 
  
  // while (button === MOVE_UP_KEY) {
  //   // setInterval(conn.write("Move: up"),1000);
  //   conn.write("Move: up")
  //   conn.write("Move: up")
  //   conn.write("Move: up")
  // } 
  // while (button === MOVE_LEFT_KEY) {
  //   setInterval(conn.write("Move: left"),1000);
  // } 
  
  // while (button === MOVE_DOWN_KEY) {
  //   setInterval(conn.write("Move: down"),1000);
  // } 
  
  // while (button === MOVE_RIGHT_KEY) {
  //   setInterval(conn.write("Move: right"), 1000);
  // } 
  
 

  
  
  
  // else if (key === messages.one) {
  //   conn.write("Say: I'm a snake");
  // } else if (key === messages.two) {
  //   conn.write("Say: Hisssssss!");
  // } else if (key === messages.three) {
  //   conn.write("Say: Get out ma way!");
  // }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



module.exports = { setupInput };
