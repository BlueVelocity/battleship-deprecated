import { ship } from "../modules/ship.js";

test("returns a ship object", () => {
  expect(ship("battleship").shipType).toBeDefined();
  expect(ship("battleship").length).toBeDefined();
});

test("returns correct ship type", () => {
  expect(ship("battleship").shipType).toBe("battleship");
});

test("throws error with invalid ship entry", () => {
  expect(() => ship("notAShipType")).toThrow(
    "InputError: Expected valid ship type",
  );
  expect(() => ship(1)).toThrow("InputError: Expected valid ship type");
  expect(() => ship(null)).toThrow("InputError: Expected valid ship type");
  expect(() => ship()).toThrow("InputError: Expected valid ship type");
});
