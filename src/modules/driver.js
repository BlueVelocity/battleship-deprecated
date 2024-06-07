import { createPlayer } from "./player.js";
import domHelper from "./domHelper.js";
import { createGrids } from "../components/grids.js";

const getId = domHelper.getId;
const newInterElement = domHelper.createInteractiveElement;

const gameState = {
  playerOne: undefined,
  playerTwo: undefined,
  currentPlayer: undefined,
  notCurrentPlayer: undefined,
  gridSize: 10,

  switchPlayer: function () {
    const tempStorage = this.currentPlayer;
    this.currentPlayer = this.notCurrentPlayer;
    this.notCurrentPlayer = tempStorage;
  },
};

const domElements = {
  gameBoard: newInterElement(getId("game-area")),
  startForm: newInterElement(getId("start-form")),
  playerOneInput: newInterElement(getId("input-player-1")),
  playerTwoInput: newInterElement(getId("input-player-2")),
  playerOneBoard: undefined,
  playerTwoBoard: undefined,
};

const tileClick = function (tile) {
  console.log(gameState);
  if (tile.name === gameState.notCurrentPlayer.name) {
    const hit = gameState.notCurrentPlayer.gameBoard.receiveAttack([
      tile.x,
      tile.y,
    ]);

    console.log(hit);

    if (hit) {
      tile.hit();
    } else {
      tile.miss();
    }

    gameState.switchPlayer();
  }
};

const createDriver = function () {
  const gameArea = document.getElementById("game-area");

  const startGame = function () {
    console.log("Starting Game!");

    const playerOneName = domElements.playerOneInput.getValue();
    const playerTwoName = domElements.playerTwoInput.getValue();
    const gridSize = gameState.gridSize;
    const tileClickCallback = (input) => console.log(input);
    const playerGrids = createGrids({
      playerOneName,
      playerTwoName,
      gridSize,
      tileClickCallback: tileClick,
    });
    const elemPlayerOneName = playerGrids.grids[0].id;
    const elemPlayerTwoName = playerGrids.grids[1].id;

    playerGrids.grids.forEach((gridElement) =>
      gameArea.appendChild(gridElement),
    );

    gameState.playerOne = createPlayer(elemPlayerOneName);
    gameState.playerTwo = createPlayer(elemPlayerTwoName, true);
    gameState.currentPlayer = gameState.playerOne;
    gameState.notCurrentPlayer = gameState.playerTwo;

    domElements.startForm.hide();
    domElements.gameBoard.show();

    domElements.playerOneBoard = newInterElement(playerGrids.grids[0]);
    domElements.playerTwoBoard = newInterElement(playerGrids.grids[1]);
    domElements.playerTwoBoard.toggleOutline();
  };

  return { activeGame: false, startGame };
};

const driver = createDriver();

const startButton = document.querySelector("#start-game");

startButton.addEventListener("click", () => {
  if (driver.activeGame === false) driver.startGame();
});
