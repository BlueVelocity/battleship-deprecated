const ship = function (shipType) {
  switch (shipType) {
    case "carrier":
      return { shipType: "carrier", length: "5" };
    case "battleship":
      return { shipType: "battleship", length: "4" };
    case "cruiser":
      return { shipType: "cruiser", length: "3" };
    case "submarine":
      return { shipType: "submarine", length: "2" };
    case "destroyer":
      return { shipType: "destroyer", length: "1" };
    default:
      throw new Error("InputError: Expected valid ship type");
  }
};

export { ship };
