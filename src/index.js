import "./style.css";
import "./modules/driver.js";
import domHelper from "./modules/domHelper.js";

const body = document.querySelector("body");

const temp = document.createElement("p");
temp.textContent = "Placed using javascript";
body.appendChild(temp);
