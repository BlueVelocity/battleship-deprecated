import { createBoard } from "../src/modules/board.js";

let board;

beforeEach(() => {
  board = createBoard();
});

it("returns a 10x10 model", () => {
  expect(board.model.length).toBe(10);
  expect(board.model[0].length).toBe(10);
});

it("can place ships using place(). Returns true if placed", () => {
  const shipLength = 1;
  const targetCoordinate = [1, 1];

  expect(board.model[1][1]).toBeFalsy();
  expect(board.place(shipLength, targetCoordinate)).toBe(true);
  expect(board.model[1][1]).toBeTruthy();
});

it("returns false if ship placement is out of bounds", () => {
  const shipLength = 1;
  const targetCoordinate = [100, 100];

  expect(board.place(shipLength, targetCoordinate)).toBe(false);
});

it("places ship length on board from origin", () => {
  const shipLength = 3;
  const targetCoordinate = [5, 5];

  board.place(shipLength, targetCoordinate);
  expect(board.model[5][5]).toBeTruthy();
  expect(board.model[5][6]).toBeTruthy();
  expect(board.model[5][7]).toBeTruthy();
  expect(board.model[5][8]).toBeFalsy();
});

it("returns false if ship extends out of bounds from placement", () => {
  const shipLength = 10;
  const targetCoordinate = [7, 7];

  expect(board.place(shipLength, targetCoordinate)).toBe(false);
  expect(board.place(shipLength, targetCoordinate, 2)).toBe(false);
  expect(board.place(shipLength, targetCoordinate, 3)).toBe(false);
  expect(board.place(shipLength, targetCoordinate, 4)).toBe(false);
});

it("hits a ship if it receives an attack on an occupied tile", () => {
  const targetCoordinate = [1, 1];
  board.place(1, targetCoordinate);
  board.receiveAttack(targetCoordinate);
  expect(board.model[1][1].isSunk()).toBe(true);
});

it("can report if all ships are sunk or not", () => {
  const targetCoordinate = [1, 1];
  board.place(1, targetCoordinate);

  expect(board.allSunk()).toBe(false);
  board.receiveAttack(targetCoordinate);
  expect(board.allSunk()).toBe(true);
});
