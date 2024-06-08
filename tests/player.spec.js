import { createPlayer } from "../src/modules/player.js";

let player;
const name = "testName";
const type = 0; //real player

beforeEach(() => {
  player = createPlayer(name, type);
});

it("accepts and returns name", () => {
  expect(player.name).toBe(name);
});

it("throws error if name is not a string", () => {
  const invalidInputs = [1, {}, [], true];

  invalidInputs.forEach((input) => {
    expect(() => createPlayer(input, type)).toThrow(
      "InvalidInput: Expected string",
    );
  });
});

it("returns type of player. Binary 0 for real, 1 for computer", () => {});

it("throws error if type is invalid", () => {
  const invalidInputs = ["1", 2, {}, []];

  invalidInputs.forEach((input) => {
    expect(() => createPlayer("name", input)).toThrow(
      "InvalidInput: Expected type to be binary 0 or 1",
    );
  });
});
