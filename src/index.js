import "./style.css";

const welcome = document.createElement("p");
welcome.textContent = "If this text is red, then template is working!";

const body = document.querySelector("body");
body.appendChild(welcome);
