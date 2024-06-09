import { createShip } from "../src/modules/ship.js";

let ship;
const length = 2;

beforeEach(() => {
  ship = createShip(length);
});

it("throws error if length is not a number", () => {
  const invalidInputs = ["1", null, {}, []];

  invalidInputs.forEach((input) => {
    expect(() => createShip(input)).toThrow(
      "InvalidInput: Expected length as int",
    );
  });
});

it("has hit function", () => {
  expect(ship.hit).toBeDefined();
});

it("has isSunk function that returns boolean status", () => {
  ship = createShip(1);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
