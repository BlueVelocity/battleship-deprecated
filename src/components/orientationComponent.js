const createOrientationButtons = () => {
  const component = document.createElement("form");
  form.id = "place-ship-form";
  form.classList = "flex flex-col gap-1 m-1";

  const swapButton = document.createElement("button");
  swapButton.type = "button";
  swapButton.id = "swap-orientation";
  swapButton.classList =
    "bg-slate-500 border border-black border-solid px-2 py-0.5 active:bg-blue-500";
  swapButton.innerText = "Swap Orientation";

  const startButton = document.createElement("button");
  startButton.type = "button";
  startButton.id = "swap-orientation";
  startButton.classList =
    "bg-slate-500 border border-black border-solid px-2 py-0.5 active:bg-blue-500";
  startButton.innerText = "Start Button";

  component.appendChild(swapButton);
  component.appendChild(startButton);

  return { component };
};

export { createOrientationButtons };
