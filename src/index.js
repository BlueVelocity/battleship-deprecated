import "./style.css";
import { createHeader } from "./components/titleBlock.js";
import { createPlayArea } from "./components/playArea.js";

const body = document.querySelector("body");

const titleBlock = createHeader("BATTLESHIP");
body.appendChild(titleBlock.component);

const grid = createPlayArea(10);
body.appendChild(grid.component);

const temp = document.createElement("p");
temp.textContent = "Working";
body.appendChild(temp);
