import "./style.css";
import { createTitleblock } from "./components/titleBlock.js";

const body = document.querySelector("body");
const titleBlock = createTitleblock("BATTLESHIP");
const welcome = document.createElement("p");

body.appendChild(createTitleblock("BATTLESHIP").component);

welcome.textContent = "If this text is red, then template is working!";
body.appendChild(welcome);
