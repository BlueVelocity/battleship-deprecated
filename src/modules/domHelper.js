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
};
