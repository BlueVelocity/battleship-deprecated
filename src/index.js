import "./style.css";

const body = document.querySelector("body");

const temp = document.createElement("p");
temp.textContent = "This text placed using javascript";
body.appendChild(temp);
