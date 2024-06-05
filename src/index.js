import "./style.css";
import { createHeader } from "./components/titleBlock.js";
import { createGrids } from "./components/grids.js";

const body = document.querySelector("body");

//const playerBoards = createGrids(10);
//body.appendChild(grid.component);

const temp = document.createElement("p");
temp.textContent = "Placed using javascript";
body.appendChild(temp);
