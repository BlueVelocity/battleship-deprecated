const createTitleblock = function (text) {
  const component = document.createElement("div");
  component.classList = "";

  const title = document.createElement("h1");
  title.textContent = text;
  title.classList = "italic bg-red opacity-25";
  component.appendChild(title);

  return { component };
};

export { createTitleblock };
