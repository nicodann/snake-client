const {
  directions,
  messages
} = require('./constants');

let intervalID;

const sendDirections = (key) => {
  clearInterval(intervalID);
  intervalID = null;
  if (!intervalID) {
    intervalID = setInterval(() => conn.write(directions[key]), 50);
  }
};

const handleUserInput =  (key) => {
  if (key === '\u0003') {
    process.exit();
  }  else if (messages[key]) {
    conn.write(messages[key]);
  } else if (directions[key]) {
    sendDirections(key);
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };