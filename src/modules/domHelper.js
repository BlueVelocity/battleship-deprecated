const makeInteractive = (element) => {
  const hide = () => element.classList.add("hidden");
  const show = () => element.classList.remove("hidden");
  const dim = () => element.classList.add("opacity-25");
  const unDim = () => element.classList.remove("opacity-25");

  return { element, hide, show, dim, unDim };
};

const getId = (id) => document.getElementById(id);

export { makeInteractive, getId };
