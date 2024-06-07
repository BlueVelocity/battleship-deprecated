import domHelper from "./domHelper.js";
import createPlayer from "./player.js";
import createBoard from "../components/grids.js";

const getId = domHelper.getId;
const interElement = domHelper.createInteractiveElement;

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
  gameBoard: interElement(getId("game-area")),
  startForm: interElement(getId("start-form")),
  playerOneInput: interElement(getId("input-player-1")),
  playerTwoInput: interElement(getId("input-player-2")),
  playerOneBoard: undefined,
  playerTwoBoard: undefined,
};

const getPlayerNames = function () {
  const playerOneName = domElements.playerOneInput.getValue();
  const playerTwoName = domElements.playerTwoInput.getValue();

  const playerOne =
    playerOneName === undefined || playerOneName === ""
      ? "Player1"
      : playerOneName;
  const playerTwo =
    playerTwoName === undefined || playerTwoName === ""
      ? "Player2"
      : playerTwoName;

  return { playerOne, playerTwo };
};

const createPlayerLink = function (name, gridSize, isComputer) {
  const playerBoard = createPlayer(name, isComputer);
  const playerDomBoard = createBoard({ name, gridSize });

  const receiveAttack = function (coordinate) {
    const attackStatus = playerBoard.gameBoard.receiveAttack(coordinate);
    const targetedTile = interElement(
      document.querySelector(`#${name}-${coordinate[0]}.${coordinate[1]}`),
    );

    if (attackStatus === true) targetedTile.hit();
    if (attackStatus === false) targetedTile.miss();
  };

  return { receiveAttack, board: playerDomBoard };
};

const createDriver = function () {
  const gameArea = document.getElementById("game-area");

  const initGame = function () {
    console.log("Initializing Game!");

    const names = getPlayerNames();

    const gridSize = gameState.gridSize;

    gameState.playerOne = createPlayerLink(names.playerOne, gridSize);
    gameState.playerTwo = createPlayerLink(names.playerTwo, gridSize);

    domElements.gameBoard.append(
      gameState.playerOne.board,
      gameState.playerTwo.board,
    );
    domElements.gameBoard.show();
    domElements.startForm.hide();
  };

  const startGame = function () {
    console.log("Starting Game!");

    gameState.playerOne = createPlayer(names.playerOne);
    gameState.playerTwo = createPlayer(names.playerTwo, true);
    gameState.currentPlayer = gameState.playerOne;
    gameState.notCurrentPlayer = gameState.playerTwo;

    domElements.startForm.hide();
    domElements.gameBoard.show();

    domElements.playerOneBoard = interElement(playerGrids.grids[0]);
    domElements.playerTwoBoard = interElement(playerGrids.grids[1]);
    domElements.playerTwoBoard.toggleOutline();
  };

  return { activeGame: false, initGame, startGame };
};

const driver = createDriver();

const startButton = document.querySelector("#start-game");

startButton.addEventListener("click", () => {
  if (driver.activeGame === false) driver.initGame();
});
