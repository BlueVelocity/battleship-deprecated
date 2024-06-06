import { createPlayer } from "./player.js";
import domHelper from "./domHelper.js";
import { createGrids } from "../components/grids.js";

const gameState = {
  playerOne: undefined,
  playerTwo: undefined,
  currentPlayer: undefined,
  gridSize: 10,
};

const createDriver = function () {
  const gameArea = document.getElementById("game-area");

  const startGame = function () {
    console.log("Starting Game!");

    domHelper.hideById("start-form");

    const playerOneName = domHelper.getInputValue("input-player-1");
    const playerTwoName = domHelper.getInputValue("input-player-2");
    const gridSize = gameState.gridSize;
    const playerGrids = createGrids({ playerOneName, playerTwoName, gridSize });

    playerGrids.grids.forEach((gridElement) =>
      gameArea.appendChild(gridElement),
    );

    gameState.playerOne = createPlayer(playerOneName);
    gameState.playerTwo = createPlayer(playerTwoName);
    gameState.currentPlayer = gameState.playerOne;
  };

  return { activeGame: false, startGame };
};

const driver = createDriver();

const startButton = document.querySelector("#start-game");

startButton.addEventListener("click", () => {
  if (driver.activeGame === false) driver.startGame();
});
