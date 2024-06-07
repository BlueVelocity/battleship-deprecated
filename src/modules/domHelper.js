export default {
  getId: function (id) {
    return document.getElementById(id);
  },

  getInputValue: function (id) {
    return document.getElementById(id).value;
  },

  hideById: function (id) {
    const element = this.getId(id);
    element.classList.add("hidden");
  },

  createInteractiveElement: function (element) {
    const hide = function () {
      element.classList.add("hidden");
    };

    const show = function () {
      element.classList.remove("hidden");
    };

    const append = function (...args) {
      args.forEach((elem) => {
        element.appendChild(elem);
      });
    };

    const update = function () {
      element = document.getElementById(element.id);
    };

    const getValue = function () {
      return element.value;
    };

    const toggleOutline = function () {
      if (element.classList.contains("outline")) {
        element.classList.remove("outline", "outline-amber-200", "outline-8");
      } else {
        element.classList.add("outline", "outline-amber-200", "outline-8");
      }
    };

    const hit = function () {
      element.classList.remove("bg-blue-500");
      element.classList.add("bg-red-500");
    };

    const miss = function () {
      element.classList.remove("bg-blue-500");
      element.classList.add("bg-zinc-400");
    };

    return {
      element,
      hide,
      show,
      append,
      update,
      getValue,
      toggleOutline,
      hit,
      miss,
    };
  },
};
