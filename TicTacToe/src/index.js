const View = require ("./ttt-view.js"); // require appropriate file"
const Game = require("../../TicTacToe node solution/game.js")// require appropriate file

  $(() => {
    const $container = $(".ttt")
    const curGame = new Game()
    const curView = new View(curGame, $container)
    return curView
    
  });
