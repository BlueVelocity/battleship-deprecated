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

    return { hide, show, update, getValue, toggleOutline };
  },
};
