const createHeader = function (text) {
  const title = document.createElement("h1");
  title.textContent = text;
  title.classList = "italic flex-auto text-lg";

  const component = document.createElement("div");
  component.classList =
    "flex justify-center items-center bg-red-500  text-center w-full h-11";
  component.appendChild(title);

  return { component };
};

export { createHeader };
