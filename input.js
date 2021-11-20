const {
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY, 
  MOVE_RIGHT_KEY,
  messages
} = require('./constants');

// setup interface to handle user input from stdin
let connection;

const handleUserInput =  (key) => {
  if (key === '\u0003') {
    process.exit();
  }  else if (messages[key]) {
    conn.write(messages[key]);
  } else if (key === MOVE_UP_KEY) {
      conn.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    conn.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    conn.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    conn.write("Move: right");
  } else if (messages[key]) {
    conn.write(messages[key]);
  }
  
  // while (key === MOVE_UP_KEY) {
  //   setInterval(conn.write("Move: up"),1000);
  // } 
  // while (key === MOVE_LEFT_KEY) {
  //   setInterval(conn.write("Move: left"),1000);
  // } 
  
  // while (key === MOVE_DOWN_KEY) {
  //   setInterval(conn.write("Move: down"),1000);
  // } 
  
  // while (key === MOVE_RIGHT_KEY) {
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
