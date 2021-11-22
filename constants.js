const IP = "localhost";
const PORT = 50541;
const ENCODING = "utf8";
const INITIALS = "NSD";
const directions = {
  'w': "Move: up",
  'a': "Move: left",
  's': "Move: down",
  'd': "Move: right"
};
const messages = {
  '1': "Say: I'm a snake",
  '2': "Say: Hisssssss!",
  '3': "Say: Get out ma way!"
};


module.exports = {
  IP,
  PORT,
  ENCODING,
  INITIALS,
  directions,
  messages
};