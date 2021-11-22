const net = require("net");
const { IP, PORT, ENCODING, INITIALS } = require('./constants');

const connect = () => {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding(ENCODING);

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Connection successful!");
    conn.write(`Name: ${INITIALS}`);
  });

  conn.on("error", () => {
  });

  return conn;
};

module.exports = { connect };