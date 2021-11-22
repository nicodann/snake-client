const {
  directions,
  messages
} = require('./constants');

let intervalID;
let connection;

const sendDirections = (key) => {
  clearInterval(intervalID);
  intervalID = null;
  if (!intervalID) {
    intervalID = setInterval(() => connection.write(directions[key]), 50);
  }
};

const handleUserInput =  (key) => {
  if (key === '\u0003') {
    process.exit();
  }  else if (messages[key]) {
    connection.write(messages[key]);
  } else if (directions[key]) {
    sendDirections(key);
  }
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

module.exports = { setupInput, intervalID };