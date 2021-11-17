const net = require("net");
const connect = function () {

  //establishes a connection with game server

  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Connection successful!");
    conn.write("Name: BOO");

    //MOVE COMMANDS DONE AUTOMATICALLY UPON CONNECTION
    // setTimeout(() => {conn.write("Move: up")}, 50);
    // setTimeout(() => {conn.write("Move: up")}, 100);
    // setInterval(() => {conn.write("Move: up")}, 50);
  });


  return conn;
};

module.exports = {connect};