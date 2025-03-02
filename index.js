// Define the initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Destructive Methods
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-Destructive Methods
function appendCat(name) {
  return [...cats, name]; // Creates a new array with the new cat added at the end
}

function prependCat(name) {
  return [name, ...cats]; // Creates a new array with the new cat added at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first cat
}
