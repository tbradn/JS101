function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isValidColor(color) {
  if (color !== "blue" || color !== "green") {
    return false;
  }
}

function colorIsValid(color) {
  return color === "blue" || color === "green";
}