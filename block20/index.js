// State object to store the numbers
const state = {
  numberBank: [],
  odds: [],
  evens: [],
};

// Get DOM elements
const numberInput = document.getElementById("number");
const addNumberButton = document.querySelector("addButton");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");
const numberBankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");

// Event listeners
addNumberButton.addEventListener("click", addNumber);
sortOneButton.addEventListener("click", sortOne);
sortAllButton.addEventListener("click", sortAll);

// Functions
function addNumber(event) {
  event.preventDefault();
  const number = parseFloat(numberInput.value);
  if (!isNaN(number)) {
    state.numberBank.push(number);
    updateDOM();
  }
  numberInput.value = "";
}

function sortOne() {
  if (state.numberBank.length > 0) {
    const number = state.numberBank.shift();
    if (number % 2 === 0) {
      state.evens.push(number);
    } else {
      state.odds.push(number);
    }
    updateDOM();
  }
}

function sortAll() {
  while (state.numberBank.length > 0) {
    sortOne();
  }
}

function updateDOM() {
  // Clear number bank and sorted numbers sections
  numberBankOutput.innerHTML = "";
  oddsOutput.innerHTML = "";
  evensOutput.innerHTML = "";

  // Add numbers to number bank section
  state.numberBank.forEach((number) => {
    const li = document.createElement("li");
    li.textContent = number;
    numberBankOutput.appendChild(li);
  });

  // Add numbers to odds section
  state.odds.forEach((number) => {
    const li = document.createElement("li");
    li.textContent = number;
    oddsOutput.appendChild(li);
  });

  // Add numbers to evens section
  state.evens.forEach((number) => {
    const li = document.createElement("li");
    li.textContent = number;
    evensOutput.appendChild(li);
  });
}

updateDOM();
