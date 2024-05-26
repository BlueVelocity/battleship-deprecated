import { createShip } from "../modules/ship.js";

const tile = function () {
  return {
    occupant: null,
  };
};

const createBoard = function (boardSize = 10) {
  const board = (function () {
    const tempBoard = [];
    for (let x = 0; x < boardSize; x++) {
      const column = [];
      for (let y = 0; y < boardSize; y++) {
        column.push(tile());
      }
      tempBoard.push(column);
    }
    return tempBoard;
  })();

  const place = function (shipLength, coordinates, orientation = 1) {
    if (!Array.isArray(coordinates))
      throw new Error("InputError: Invalid coordinate data type");

    if (
      typeof coordinates[0] !== "number" ||
      typeof coordinates[1] !== "number"
    )
      throw new Error("InputError: Coordinates contain invalid data type");

    if (
      coordinates[0] < 0 ||
      coordinates[0] > boardSize ||
      coordinates[1] < 0 ||
      coordinates[1] > boardSize
    )
      throw new Error("InputError: Coordinates outside range");

    const ship = createShip(shipLength);

    for (let i = 0; i < ship.length; i++) {
      board[Math.round(coordinates[0])][
        Math.round(coordinates[1] + i)
      ].occupant = ship;
    }
  };

  return {
    get board() {
      return board;
    },
    place,
  };
};

export { createBoard };
