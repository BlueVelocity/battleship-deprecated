import { createBoardComponent } from "../src/components/boardComponent.js";

let boardComponent;

beforeEach(() => {
  boardComponent = createBoardComponent();
});

it("returns an object with a component element", () => {
  expect(boardComponent.component instanceof Element).toBe(true);
});

it("accepts an id and adds it to the returned element", () => {
  expect(createBoardComponent("insertedId").component.id).toBe("insertedId");
});

it("contains coordinates on its tiles", () => {
  expect(boardComponent.component.childNodes[0].childNodes[0].id).toBe("0,0");
  expect(boardComponent.component.childNodes[5].childNodes[5].id).toBe("5,5");
});
