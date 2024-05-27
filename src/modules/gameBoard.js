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

  const roster = [];

  const place = function (shipLength, coordinates, orientation = 1) {
    if (!Array.isArray(coordinates))
      throw new Error("InputError: Invalid coordinate data type");

    if (
      typeof coordinates[0] !== "number" ||
      typeof coordinates[1] !== "number"
    )
      throw new Error("InputError: Coordinates contain invalid data type");

    function checkValidCoord(coord) {
      if (
        coord[0] < 0 ||
        coord[0] > boardSize ||
        coord[1] < 0 ||
        coord[1] > boardSize
      )
        throw new Error("InputError: Coordinates outside range");
    }

    checkValidCoord(coordinates);

    const x = Math.round(coordinates[0]);
    const y = Math.round(coordinates[1]);

    const positions = (function () {
      const calcedPositions = [];

      for (let i = 0; i < shipLength; i++) {
        if (orientation === 1) {
          calcedPositions.push([x, y + i]);
        } else if (orientation === 2) {
          calcedPositions.push([x + i, y]);
        } else if (orientation === 3) {
          calcedPositions.push([x, y - i]);
        } else if (orientation === 4) {
          calcedPositions.push([x - i, y]);
        } else {
          throw new Error("InputError: Invalid orientation");
        }
      }

      calcedPositions.forEach((coordinate) => {
        checkValidCoord(coordinate);
      });

      return calcedPositions;
    })();

    const ship = createShip(shipLength);

    roster.push(ship);

    positions.forEach((coordinates) => {
      board[coordinates[0]][coordinates[1]].occupant = ship;
    });
  };

  const missed = [];

  const receiveAttack = function (coordinates) {
    const targetTile = board[coordinates[0]][coordinates[1]];
    if (!targetTile.occupant) {
      missed.push(coordinates);
    } else {
      targetTile.occupant.hit();
    }
  };

  return {
    get board() {
      return board;
    },
    get roster() {
      return roster;
    },
    place,
    receiveAttack,
    get missed() {
      return missed;
    },
  };
};

export { createBoard };
