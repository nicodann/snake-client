const net = require("net");
const { IP, PORT } = require('./constants');

const connect = () => {

  //establishes a connection with game server

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    conn.write(data);
  });

  conn.on("connect", () => {
    console.log("Connection successful!");
    conn.write("Name: BOO");
  });


  return conn;
};

module.exports = { connect };