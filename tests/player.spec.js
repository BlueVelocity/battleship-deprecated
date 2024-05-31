import { createPlayer } from "../src/modules/player.js";

let player = createPlayer("testName");

beforeEach(() => {
  let player = createPlayer("testName");
});

test("creates player object with game board grid", () => {
  expect(player.gameBoard.board[0][0].occupant).toBe(null);
});

test("creates player object with name", () => {
  const player = createPlayer("P1");
  expect(player.name).toBe("P1");
});

test("throws error if name is undefined", () => {
  expect(() => createPlayer()).toThrow("InputError: Undefined name");
});

test("throws error if name is not a string", () => {
  const invalidInputs = [3, [], {}, true];

  invalidInputs.forEach((input) => {
    expect(() => createPlayer(input)).toThrow("InputError: Invalid name");
  });
});

test("creates computer or player based on type", () => {
  expect(createPlayer("testName", true).isComputer).toBe(true);
  expect(createPlayer("testName", 1).isComputer).toBe(true);
  expect(createPlayer("testName", false).isComputer).toBe(false);
  expect(createPlayer("testName", 0).isComputer).toBe(false);
});

test("throws error if player type selection is not true, 1, false, or 0", () => {
  const invalidInputs = [3, [], {}, "true"];

  invalidInputs.forEach((input) => {
    expect(() => {
      createPlayer("testName", input);
    }).toThrow("InputError: Expected boolean for player type selection");
  });
});
