const IP = "localhost";
const PORT = 50541;
const directions = {
  'w': "Move: up",
  'a': "Move: left",
  's': "Move: down",
  'd': "Move: right"
}
// const MOVE_UP_KEY = 'w';
// const MOVE_LEFT_KEY = 'a';
// const MOVE_DOWN_KEY = 's';
// const MOVE_RIGHT_KEY = 'd';
const messages = {
  '1': "Say: I'm a snake",
  '2': "Say: Hisssssss!",
  '3': "Say: Get out ma way!"
}


module.exports = { 
  IP,
  PORT, 
  directions,
  messages
};