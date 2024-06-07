import createGrid from "../src/components/grids.js";

it("returns an element", () => {
  expect(createGrid() instanceof Element).toBe(true);
});

it("only accepts string for name", () => {
  const invalidCases = [1, {}, [], null];

  invalidCases.forEach((invalidCase) => {
    expect(() => createGrid({ name: invalidCase })).toThrow(
      "InputError: Name must be a string",
    );
  });
});

it("assigns default name to id [defaultName]-grid", () => {
  expect(createGrid().id.split("-")[0]).not.toBe("");
});

it("accepts input name to id: [name]-grid", () => {
  const inputName = "testName";
  expect(createGrid({ name: inputName }).id).toBe(inputName + "-grid");
});

it("creates a grid with [x] rows with [x] tiles", () => {
  const proposedGridSize = 5;

  expect(
    createGrid({ gridSize: proposedGridSize }).childElementCount ===
      proposedGridSize,
  ).toBe(true);
  expect(
    createGrid({ gridSize: proposedGridSize }).firstChild.childElementCount ===
      proposedGridSize,
  ).toBe(true);
});

it("defaults to 10 rows with 10 tiles", () => {
  expect(createGrid().childElementCount === 10).toBe(true);
  expect(createGrid().firstChild.childElementCount === 10).toBe(true);
});

it("contains a grid with rows with tiles that contain coordinates as id, format [name]-[x].[y]", () => {
  const name = "Player";
  const gridElement = createGrid({ name });
  const gridTile = gridElement.firstChild.firstChild;
  expect(gridTile.id).toBe("Player-0.0");
});
