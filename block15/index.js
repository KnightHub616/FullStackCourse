// get input with prompt() - Josue
// split input by commas into list - Ryan
// create empty object - Josue
// add input to object - Ryan
// count entries in object NEEDS TO BE A FUNCTION - Shaniqua
//  input: <number of times it appears in input list> - all
// output object with console.table() - Josue

// const input = prompt("prompt message", "default entry")
const input = prompt(
  "Enter a list of froyo flavors separated by commas:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const flavorArray = input.split(",");
const flavorCount = {};

function countFlavors(list, object) {
  for (flavor of list) {
    if (flavor in object) {
      object[flavor]++;
    } else {
      object[flavor] = 1;
    }
  }
  return object;
}

const output = countFlavors(flavorArray, flavorCount);
console.table(output);
